<?php

require_once PATH_PFX . 'config/database.php';
require_once PATH_PFX . 'config/env.php'; // (!) Created after build (dev/prod)

$JSON_GLOBAL = json_decode(file_get_contents(PATH_PFX . 'config/defaults.json'), true);
$JSON_ENV = json_decode(file_get_contents(PATH_PFX . 'config/environmental.json'), true);
$JSON_OPTIONS = json_decode(file_get_contents(PATH_PFX . 'config/options.json'), true);
$JSON_NUMS = json_decode(file_get_contents(PATH_PFX . 'config/nums.json'), true);
$JSON_COPY = json_decode(file_get_contents(PATH_PFX . 'config/copy.json'), true);



/*
 * Common system definitions
 */
const PASS_CRYPT =                                        PASSWORD_ARGON2I;
const PASS_CRYPT_OPTIONS = [
    'memory_cost' => 2048,
    'time_cost' => 4,
    'threads' => 3
];
define( "CMS_NAME",                                       $JSON_GLOBAL['Admin']['META']['name']);



/*
 * Environmental constants
 */
const ENV =                                               BUILD['env'];
const TIMESTAMP =                                         BUILD['timestamp'];



/*
 * Config objects
 */
define( "CFG_ENV",                                        $JSON_ENV[ ENV ] );
define( "CFG_DB",                                         $DB[ ENV ]['SQL'] );
const CFG_DB_CONN =                                       [CFG_DB['server'], CFG_DB['user'], CFG_DB['password'], CFG_DB['name'], CFG_DB['port']];



/*
 * Path
 */
define( "PATH_UPLOADS",                                   PATH_PFX . $JSON_GLOBAL['_path']['uploads'] );
define( "PATH_LOGS",                                      PATH_PFX . $JSON_GLOBAL['_path']['logs'] );
define( "PATH_TMP",                                       PATH_PFX . $JSON_GLOBAL['_path']['tmp'] );
define( "PATH_CACHE",                                     PATH_PFX . $JSON_GLOBAL['_path']['cache'] );
define( "PATH_PREFIX_LOST_PASSWORD",                      $JSON_GLOBAL['_location']['admin_lostPasswordToken_prefix'] );



/*
 * LOCATION
 */
define( "LOC_ADMIN_LOGIN",                                $JSON_GLOBAL['_location']['admin_login'] );
define( "LOC_ADMIN_LOST_PASSWORD",                        $JSON_GLOBAL['_location']['admin_lostPassword'] );



/*
 * Uploads
 */
define( "OPTIONS_UPLOADS",                                $JSON_OPTIONS['uploads'] );
define( "UPLOADS_IMAGE_FORMATS",                          $JSON_OPTIONS['uploads']['image']['format'] );



/*
 * Index endpoints defaults
 */
define( "VIEW", [
    '@' =>                                                  $JSON_COPY,
    'ADMIN' => [
        'url' =>                                              CFG_ENV['ROOT_PATH'] . $JSON_GLOBAL['_path']['admin'],
        'styles' =>                                           CFG_ENV['ADMIN']['STYLES'],
        'scripts' =>                                          CFG_ENV['ADMIN']['SCRIPTS'],
        'meta' => [
            'title' =>                                          $JSON_GLOBAL['Admin']['META']['name'],
            'description' =>                                    $JSON_GLOBAL['Admin']['META']['description'],
            'keywords' =>                                       $JSON_GLOBAL['Admin']['META']['keywords'],
            'robots' =>                                         $JSON_GLOBAL['Admin']['META']['robots'],
            'lang' =>                                           $JSON_GLOBAL['Admin']['META']['lang'],
        ],
    ],
    'WEB' => [
        'url' =>                                              CFG_ENV['ROOT_PATH'] . $JSON_GLOBAL['_path']['web'],
        'styles' =>                                           CFG_ENV['WEB']['STYLES'],
        'scripts' =>                                          CFG_ENV['WEB']['SCRIPTS'],
        'meta' => [
            'title' =>                                          $JSON_GLOBAL['Web']['META']['name'],
            'description' =>                                    $JSON_GLOBAL['Web']['META']['description'],
            'keywords' =>                                       $JSON_GLOBAL['Web']['META']['keywords'],
            'robots' =>                                         $JSON_GLOBAL['Web']['META']['robots'],
            'lang' =>                                           $JSON_GLOBAL['Web']['META']['lang'],
            'author' =>                                         $JSON_GLOBAL['Web']['META']['author'] ? $JSON_GLOBAL['Web']['META']['author'] : $JSON_COPY['author_meta'],
        ],
    ]
] );

