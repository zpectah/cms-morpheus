<?php


namespace core\model;


class Pages {

    private function get_language_row($conn, $lang, $id) {
        $response = null;
        $table_name = 'pages__' . $lang;

        // prepare
        $query = ('SELECT * FROM ' . $table_name . ' WHERE id = ?');
        $types = 'i';
        $args = [ $id ];

        // execute
        $stmt = $conn -> prepare($query);
        $stmt -> bind_param($types, ...$args);
        $stmt -> execute();
        $result = $stmt -> get_result();
        $stmt -> close();

        if ($result -> num_rows > 0) {
            while($row = $result -> fetch_assoc()) {
                $response = $row;
            }
        }

        return $response;
    }

    private function create_language_rows($conn, $activeLanguages, $lastId, $requestData) {
        $requestData = json_decode(json_encode($requestData), true);
        $response = [];

        foreach ($activeLanguages as $lang) {
            $table_name = 'pages__' . $lang;

            // prepare
            $query = ('INSERT INTO ' . $table_name . ' (id, title, content) VALUES (?,?,?)');
            $types = 'iss';
            $args = [
                $lastId,
                $requestData[$lang]['title'],
                $requestData[$lang]['content']
            ];

            // execute
            if ($conn -> connect_error) {
                $response = $conn -> connect_error;
            } else {
                $stmt = $conn -> prepare($query);
                $stmt -> bind_param($types, ...$args);
                $stmt -> execute();
                $response[] = $lang;
                $stmt -> close();
            }
        }

        return $response;
    }

    private function update_language_rows($conn, $activeLanguages, $id, $requestData) {
        $requestData = json_decode(json_encode($requestData), true);
        $response = null;

        foreach ($activeLanguages as $lang) {
            $table_name = 'pages__' . $lang;

            // prepare
            $query = ('UPDATE ' . $table_name . ' SET title = ?, content = ? WHERE id = ?');
            $types = 'ssi';
            $args = [
                $requestData[$lang]['title'],
                $requestData[$lang]['content'],
                $id
            ];

            // execute
            if ($conn -> connect_error) {
                $response = $conn -> connect_error;
            } else {
                $stmt = $conn -> prepare($query);
                $stmt -> bind_param($types, ...$args);
                $stmt -> execute();
                $response[] = $lang;
                $stmt -> close();
            }
        }

        return $response;
    }


    public function get ($conn, $languages) {
        $response = [];
        $active_languages = $languages['active'];

        // prepare
        $query = ('/*' . MYSQLND_QC_ENABLE_SWITCH . '*/' . 'SELECT * FROM pages WHERE deleted = ?');
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
                foreach ($active_languages as $lang) {
                    $row['lang'][$lang] = self::get_language_row($conn, $lang, $row['id']);
                }

                $response[] = $row;
            }
        }

        return $response;
    }

    public function create ($conn, $requestData, $languages) {
        $requestData = json_decode(json_encode($requestData), true);

        // prepare
        $query = ('INSERT INTO pages (
                   type,
                   type_id,
                   name,
                   active,
                   deleted
                   ) VALUES (?,?,?,?,?)');
        $types = 'sssii';
        $args = [
            $requestData['type'],
            $requestData['type_id'],
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
            $id = $stmt -> insert_id;
            $response = [
                'id' => $id,
                'lang' => self::create_language_rows($conn, $languages['active'], $id, $requestData['lang']) // created languages ... !!!
            ];
            $stmt -> close();
        }

        return $response;
    }

    public function update ($conn, $requestData, $languages) {
        $requestData = json_decode(json_encode($requestData), true);

        $typeId = ($requestData['type'] == 'system' || $requestData['type'] == 'category' || $requestData['type'] == 'tags') ? $requestData['type_id'] : '';

        // prepare
        $query = ('UPDATE pages SET
                 type = ?,
                 type_id = ?,
                 name = ?,
                 active = ?
		WHERE id = ?');
        $types = 'sssii';
        $args = [
            $requestData['type'],
            $typeId,
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
                'rows' => $stmt -> affected_rows,
                'lang' => self::update_language_rows($conn, $languages['active'], $requestData['id'], $requestData['lang']),
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
            $query = ('UPDATE pages SET active = IF(active=1, 0, 1) WHERE id = ?');
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
            $query = ('UPDATE pages SET deleted = 1 WHERE id = ?');
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