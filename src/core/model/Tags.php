<?php


namespace core\model;


class Tags {

    public function get ($conn) {
        $response = [];

        // prepare
        $query = ('/*' . MYSQLND_QC_ENABLE_SWITCH . '*/' . 'SELECT * FROM tags WHERE deleted = ?');
        $types = 'i';
        $args = [ 0 ];

        // execute
        $stmt = $conn -> prepare($query);
        $stmt -> bind_param($types, ...$args);
        $stmt -> execute();
        $result = $stmt -> get_result();
        $stmt -> close();

        if ($result -> num_rows > 0) {
            while($row = $result -> fetch_assoc()) {
                $response[] = $row;
            }
        }

        return $response;
    }

    public function create ($conn, $requestData) {
        $requestData = json_decode(json_encode($requestData), true);

        // prepare
        $query = ('INSERT INTO tags (name, active, deleted) VALUES (?,?,?)');
        $types = 'sii';
        $args = [
            $requestData['name'],
            $requestData['active'],
            0
        ];

        // execute
        if ($conn -> connect_error) {
            $response = $conn -> connect_error;
        } else {
            $stmt = $conn -> prepare($query);
            $stmt -> bind_param($types, ...$args);
            $stmt -> execute();
            $response = [
                'id' => $stmt -> insert_id
            ];
            $stmt -> close();
        }

        return $response;
    }

    public function update ($conn, $requestData) {
        $requestData = json_decode(json_encode($requestData), true);

        // prepare
        $query = ('UPDATE tags SET name = ?, active = ? WHERE id = ?');
        $types = 'sii';
        $args = [
            $requestData['name'],
            $requestData['active'],
            $requestData['id']
        ];

        // execute
        if ($conn -> connect_error) {
            $response = $conn -> connect_error;
        } else {
            $stmt = $conn -> prepare($query);
            $stmt -> bind_param($types, ...$args);
            $stmt -> execute();
            $response = [
                'rows' => $stmt -> affected_rows
            ];
            $stmt -> close();
        }

        return $response;
    }

    public function toggle ($conn, $requestData) {
        $requestData = json_decode(json_encode($requestData), true);
        $response = null;

        if ($conn -> connect_error) return $conn -> connect_error;

        function toggleRow ($conn, $id) {
            // prepare
            $query = ('UPDATE tags SET active = IF(active=1, 0, 1) WHERE id = ?');
            $types = 'i';
            $args = [ $id ];

            // execute
            $stmt = $conn -> prepare($query);
            $stmt -> bind_param($types, ...$args);
            $stmt -> execute();
            $r = $stmt -> affected_rows;
            $stmt -> close();

            return $r;
        }

        $id = $requestData['id'];

        if ($id) {
            $response = toggleRow($conn, $id);
        } else if (is_array($requestData)) {
            foreach ($requestData as $item) {
                $response[] = toggleRow($conn, $item);
            }
        }

        return $response;
    }

    public function delete ($conn, $requestData) {
        $requestData = json_decode(json_encode($requestData), true);
        $response = null;

        if ($conn -> connect_error) return $conn -> connect_error;

        function deleteRow ($conn, $id) {
            // prepare
            $query = ('UPDATE tags SET deleted = 1 WHERE id = ?');
            $types = 'i';
            $args = [ $id ];

            // execute
            $stmt = $conn -> prepare($query);
            $stmt -> bind_param($types, ...$args);
            $stmt -> execute();
            $r = $stmt -> affected_rows;
            $stmt -> close();

            return $r;
        }

        $id = $requestData['id'];

        if ($id) {
            $response = deleteRow($conn, $id);
        } else if (is_array($requestData)) {
            foreach ($requestData as $item) {
                $response[] = deleteRow($conn, $item);
            }
        }

        return $response;
    }

}