# Morpheus

**!!! In development -- In development -- In development -- In development !!!**

## Description
Content Managing System with multiple languages for easy management.

## Requirements
* Must be installed globally on machine:
    - Node.js (Node Package Manager)
    - Yarn
    - Gulp CLI
* PHP and Composer (For Windows may be different stack)
* Apache Server with MySQL database. Prefer (XAMP / MAMP / LAMP / ...)

## Dependencies
* JavaScript:
    - TypeScript
    - Babel
    - React
    - styled-components (https://styled-components.com/)
    - JSS (https://cssinjs.org/styled-jss?v=v2.2.3)
    - Material UI (https://material-ui.com/)
    - Redux
    - i18n (https://react.i18next.com/)
    - lodash
    - moment.js
    - ...more
* PHP 7+:
    - bladeone (https://github.com/EFTEC/BladeOne)
    - php-image-resize (https://github.com/gumlet/php-image-resize)
    - mysqldump-php (https://github.com/ifsnop/mysqldump-php)
* Styles:
    - Sass/SCSS

## Development configuration
### Apache Server for development
#### Virtual Host
```
<VirtualHost *:80>
    DocumentRoot "/path-to-project-root/Morpheus/dev/"
    ServerName morpheus
</VirtualHost>

<VirtualHost *:80>
    DocumentRoot "/path-to-project-root/Morpheus/test/"
    ServerName test.morpheus
</VirtualHost>
```
#### Hosts
```
127.0.0.1		morpheus
127.0.0.1		test.morpheus
```

### Note
- (!) If you config correctly and open your browser with ``http://morpheus/`` or ``http://test.morpheus/`` you will see current build
- (!) Configuration paths may be different for Windows or Unix system users

## Development tasks
### Install
- ``% yarn install`` - Install node packages
- ``% yarn initial`` - Prepare PHP vendors

### Watch
- ``% yarn start`` - Watching changes for whole project
- ``% yarn start:admin`` - Watching changes for **admin/** and backend files
- ``% yarn start:web`` - Watching changes for **web/**

### Build
- ``% yarn dev`` - Create development bundle
- ``% yarn test`` - Create test bundle
- ``% yarn build`` - Create production bundle

## Environment directories

Location | Description
--- | ---
``./src`` | Source directory
``./dev`` | Build development directory
``./test`` | Build test directory (prepared for local test)
``./prod`` | Build production directory (prepared for deploy)

## File structure

Location | Source | Description
--- | --- | ---
``/admin`` | source | Root Admin directory (endpoint)
``/api`` | source | Root Api directory (endpoint)
``/web`` | source |Root Web directory (endpoint)
``/config`` | source | Config files
``/core`` | source | PHP Core files
``/libs`` | source | Extended libraries (Only for imports)
``/static`` | source | Static files (images or whatever)
``/vendor`` | source,dev,test,prod | Vendor directory (Composer)
``/uploads`` | dev,test,prod | Uploaded files from system
``/logs`` | dev,test,prod | Log files, if any

## Configuration and Options files

Name | Type | Location | Need rebuild (*) | Description
--- | --- | --- | --- | ---
Development | All | ``config.gulp.js`` | true | Development configuration file
Config | Admin | ``./src/admin/scripts/config.js`` | true | Config file imports
Constants | Admin | ``./src/admin/scripts/constants.ts`` | true | JavaScript Constants
Constants | Backend | ``./src/config/constants.php`` | false | PHP Constants
Database | Backend | ``./src/config/database.php`` | false | Configuration for Backend databases
Global | All | ``./src/config/global.json`` | true | Global configuration file
Environment | All | ``./src/config/environmental.json`` | true | Configuration by environment
Options | All | ``./src/config/options.json`` | true | Project options object
Locales | All | ``./src/config/locales.json`` | true | Locale options object
Numbers | All | ``./src/config/nums.json`` | true | For other number list

(*) When value changes is necessary to create new bundle or just copy file only

## Api
- See ``./docs.api.md`` file for more info
