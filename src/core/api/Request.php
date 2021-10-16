<?php


namespace core\api;


use core\services\DataService;
use core\services\SessionService;


class Request {

    private function isAuthorized () {
        $SessionService = new SessionService;

        $token = $SessionService -> get_token();
        $request_token = $_SERVER['HTTP_X_APP_TOKEN'];

        return $token == $request_token;
    }

    public function getResponse () {
        $DataService = new DataService;
        $authorized = self::isAuthorized();
        $unauthorizedResponse = [
            'message' => 'No request token',
            'status' => 'error',
            'data' => null,
        ];
        $urlTrimmed = ltrim( $_SERVER['REDIRECT_URL'], "/" );
        $url = explode( "/", $urlTrimmed );
        $requestData = json_decode(file_get_contents('php://input'));
        $parsedData = json_decode(json_encode($requestData), true);

        if ( $url[1] ) switch ($url[1]) {

            // Settings
            case 'get_settings':
                if ($authorized) {
                    $response['data'] = $DataService -> get('Settings');
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'update_settings':
                if ($authorized) {
                    $response['data'] = $DataService -> update('Settings', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }


            // Profile
            case 'get_profile':
                if ($authorized) {
                    $response['data'] = $DataService -> get('Profile');
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'update_profile':
                if ($authorized) {
                    $response['data'] = $DataService -> update('Profile', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'user_login':
                $response['data'] = $DataService -> user_login($parsedData);
                $response['status'] = 'ok';
                return $response;

            case 'user_logout':
                $response['data'] = $DataService -> user_logout();
                $response['status'] = 'ok';
                return $response;

            case 'user_lost_password':
                $response['data'] = $DataService -> user_lost_password($parsedData);
                $response['status'] = 'ok';
                return $response;

            case 'user_lost_password_reset':
                $response['data'] = $DataService -> user_lost_password_reset($parsedData);
                $response['status'] = 'ok';
                return $response;


            // Users
            case 'get_users':
                if ($authorized) {
                    $response['data'] = $DataService -> get('Users', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'create_users':
                if ($authorized) {
                    $response['data'] = $DataService -> create('Users', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'toggle_users':
                if ($authorized) {
                    $response['data'] = $DataService -> toggle('Users', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'update_users':
                if ($authorized) {
                    $response['data'] = $DataService -> update('Users', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'delete_users':
                if ($authorized) {
                    $response['data'] = $DataService -> delete('Users', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }


            // Posts
            case 'get_posts':
                if ($authorized) {
                    $response['data'] = $DataService -> get('Posts');
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'create_posts':
                if ($authorized) {
                    $response['data'] = $DataService -> create('Posts', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'toggle_posts':
                if ($authorized) {
                    $response['data'] = $DataService -> toggle('Posts', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'update_posts':
                if ($authorized) {
                    $response['data'] = $DataService -> update('Posts', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'delete_posts':
                if ($authorized) {
                    $response['data'] = $DataService -> delete('Posts', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }


            // Pages
            case 'get_pages':
                if ($authorized) {
                    $response['data'] = $DataService -> get('Pages');
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'create_pages':
                if ($authorized) {
                    $response['data'] = $DataService -> create('Pages', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'toggle_pages':
                if ($authorized) {
                    $response['data'] = $DataService -> toggle('Pages', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'update_pages':
                if ($authorized) {
                    $response['data'] = $DataService -> update('Pages', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'delete_pages':
                if ($authorized) {
                    $response['data'] = $DataService -> delete('Pages', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }


            // Tags
            case 'get_tags':
                if ($authorized) {
                    $response['data'] = $DataService -> get('Tags');
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'create_tags':
                if ($authorized) {
                    $response['data'] = $DataService -> create('Tags', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'toggle_tags':
                if ($authorized) {
                    $response['data'] = $DataService -> toggle('Tags', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'update_tags':
                if ($authorized) {
                    $response['data'] = $DataService -> update('Tags', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'delete_tags':
                if ($authorized) {
                    $response['data'] = $DataService -> delete('Tags', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }


            // Translations
            case 'get_translations':
                if ($authorized) {
                    $response['data'] = $DataService -> get('Translations');
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'create_translations':
                if ($authorized) {
                    $response['data'] = $DataService -> create('Translations', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'toggle_translations':
                if ($authorized) {
                    $response['data'] = $DataService -> toggle('Translations', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'update_translations':
                if ($authorized) {
                    $response['data'] = $DataService -> update('Translations', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'delete_translations':
                if ($authorized) {
                    $response['data'] = $DataService -> delete('Translations', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }


            // Requests
            case 'get_requests':
                if ($authorized) {
                    $response['data'] = $DataService -> get('Requests', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'create_requests':
                if ($authorized) {
                    $response['data'] = $DataService -> create('Requests', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'delete_requests':
                if ($authorized) {
                    $response['data'] = $DataService -> delete('Requests', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }


            // Categories
            case 'get_categories':
                if ($authorized) {
                    $response['data'] = $DataService -> get('Categories');
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'create_categories':
                if ($authorized) {
                    $response['data'] = $DataService -> create('Categories', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'toggle_categories':
                if ($authorized) {
                    $response['data'] = $DataService -> toggle('Categories', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'update_categories':
                if ($authorized) {
                    $response['data'] = $DataService -> update('Categories', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'delete_categories':
                if ($authorized) {
                    $response['data'] = $DataService -> delete('Categories', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }


            // Uploads
            case 'get_uploads':
                if ($authorized) {
                    $response['data'] = $DataService -> get('Uploads');
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'create_uploads':
                if ($authorized) {
                    $response['data'] = $DataService -> create('Uploads', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'toggle_uploads':
                if ($authorized) {
                    $response['data'] = $DataService -> toggle('Uploads', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'update_uploads':
                if ($authorized) {
                    $response['data'] = $DataService -> update('Uploads', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'delete_uploads':
                if ($authorized) {
                    $response['data'] = $DataService -> delete('Uploads', $parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }




            // Installer
            case 'install_language':
                if ($authorized) {
                    $response['data'] = $DataService -> install_language($parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }

            case 'install_module':
                if ($authorized) {
                    $response['data'] = $DataService -> install_module($parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }


            // SqlDumper
            case 'export_table_dump':
                return $DataService -> export_table_dump();

            case 'import_table_data':
                if ($authorized) {
                    $response['data'] = $DataService -> import_table_data($parsedData);
                    $response['status'] = 'ok';
                    return $response;
                } else {
                    return $unauthorizedResponse;
                }


            // ...
            default:
                return [
                    'message' => 'Wrong response',
                    'status' => 'error',
                    'data' => null,
                ];

        }
    }

}