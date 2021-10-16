<?php


namespace core\services;


use core\model\Categories;
use core\model\Translations;
use core\model\Profile;
use core\model\Settings;
use core\model\Uploads;
use core\model\Users;
use core\model\Posts;
use core\model\Pages;
use core\model\Tags;
use mysqli;


class DataService {

	// model

	public function get ($model, $data = null) {
		$conn = new mysqli(...CFG_DB_CONN);
		$response = null;

		// module: App
		$Profile = new Profile;
		$Settings = new Settings;
		$Users = new Users;
		$Posts = new Posts;
		$Pages = new Pages;
		$Tags = new Tags;
		$Translations = new Translations;
		$Categories = new Categories;
		$Uploads = new Uploads;

		$languages = $Settings -> get_languages($conn);
		$modules = $Settings -> get_modules($conn);

		switch ($model) {

			case 'Settings':
				$response = $Settings -> get($conn);
				break;

			case 'Profile':
				$response = $Profile -> get($conn);
				break;

			case 'Users':
				$response = $Users -> get($conn, $data);
				break;

			case 'Posts':
				$response = $Posts -> get($conn, $languages);
				break;

			case 'Pages':
				$response = $Pages -> get($conn, $languages);
				break;

			case 'Tags':
				$response = $Tags -> get($conn);
				break;

			case 'Translations':
				$response = $Translations -> get($conn, $languages);
				break;

			case 'Categories':
				$response = $Categories -> get($conn, $languages);
				break;

			case 'Uploads':
				$response = $Uploads -> get($conn, $languages);
				break;

		}

		$conn -> close();

		return $response;
	}

	public function create ($model, $data) {
		$conn = new mysqli(...CFG_DB_CONN);
		$response = null;

		$logs = new LogService;

		// module: App
		$Profile = new Profile;
		$Settings = new Settings;
		$Users = new Users;
		$Posts = new Posts;
		$Pages = new Pages;
		$Tags = new Tags;
		$Translations = new Translations;
		$Categories = new Categories;
		$Uploads = new Uploads;

		$languages = $Settings -> get_languages($conn);
		$modules = $Settings -> get_modules($conn);

		$logs -> create(
			$Profile -> get($conn)['id'],
			'create',
			$model
		);

		switch ($model) {

			case 'Users':
				$response = $Users -> create($conn, $data);
				break;

			case 'Posts':
				$response = $Posts -> create($conn, $data, $languages);
				break;

			case 'Pages':
				$response = $Pages -> create($conn, $data, $languages);
				break;

			case 'Tags':
				$response = $Tags -> create($conn, $data);
				break;

			case 'Translations':
				$response = $Translations -> create($conn, $data, $languages);
				break;

			case 'Categories':
				$response = $Categories -> create($conn, $data, $languages);
				break;

			case 'Uploads':
				$response = $Uploads -> create($conn, $data, $languages);
				break;

		}

		$conn -> close();

		return $response;
	}

	public function update ($model, $data) {
		$conn = new mysqli(...CFG_DB_CONN);
		$response = null;

		$logs = new LogService;

		// module: App
		$Profile = new Profile;
		$Settings = new Settings;
		$Users = new Users;
		$Posts = new Posts;
		$Pages = new Pages;
		$Tags = new Tags;
		$Translations = new Translations;
		$Categories = new Categories;
		$Uploads = new Uploads;

		$languages = $Settings -> get_languages($conn);
		$modules = $Settings -> get_modules($conn);

		$logs -> create(
			$Profile -> get($conn)['id'],
			'update',
			$model . ' ' . $data -> id
		);

		switch ($model) {

			case 'Settings':
				$response = $Settings -> update($conn, $data);
				break;

			case 'Users':
				$response = $Users -> update($conn, $data);
				break;

			case 'Profile':
				$response = $Profile -> update($conn, $data);
				break;

			case 'Posts':
				$response = $Posts -> update($conn, $data, $languages);
				break;

			case 'Pages':
				$response = $Pages -> update($conn, $data, $languages);
				break;

			case 'Tags':
				$response = $Tags -> update($conn, $data);
				break;

			case 'Translations':
				$response = $Translations -> update($conn, $data, $languages);
				break;

			case 'Categories':
				$response = $Categories -> update($conn, $data, $languages);
				break;

			case 'Uploads':
				$response = $Uploads -> update($conn, $data, $languages);
				break;

		}

		$conn -> close();

		return $response;
	}

	public function toggle ($model, $data) {
		$conn = new mysqli(...CFG_DB_CONN);
		$response = null;

		$logs = new LogService;

		// module: App
		$Profile = new Profile;
		$Settings = new Settings;
		$Users = new Users;
		$Posts = new Posts;
		$Pages = new Pages;
		$Tags = new Tags;
		$Translations = new Translations;
		$Categories = new Categories;
		$Uploads = new Uploads;

		$modules = $Settings -> get_modules($conn);

		$logs -> create(
			$Profile -> get($conn)['id'],
			'toggle',
			$model
		);

		switch ($model) {

			case 'Users':
				$response = $Users -> toggle($conn, $data);
				break;

			case 'Posts':
				$response = $Posts -> toggle($conn, $data);
				break;

			case 'Pages':
				$response = $Pages -> toggle($conn, $data);
				break;

			case 'Tags':
				$response = $Tags -> toggle($conn, $data);
				break;

			case 'Translations':
				$response = $Translations -> toggle($conn, $data);
				break;

			case 'Categories':
				$response = $Categories -> toggle($conn, $data);
				break;

			case 'Uploads':
				$response = $Uploads -> toggle($conn, $data);
				break;

		}

		$conn -> close();

		return $response;
	}

	public function delete ($model, $data) {
		$conn = new mysqli(...CFG_DB_CONN);
		$response = null;

		$logs = new LogService;

		// module: App
		$Profile = new Profile;
		$Settings = new Settings;
		$Users = new Users;
		$Posts = new Posts;
		$Pages = new Pages;
		$Tags = new Tags;
		$Translations = new Translations;
		$Categories = new Categories;
		$Uploads = new Uploads;

		$modules = $Settings -> get_modules($conn);

		$logs -> create(
			$Profile -> get($conn)['id'],
			'delete',
			$model
		);

		switch ($model) {

			case 'Users':
				$response = $Users -> delete($conn, $data);
				break;

			case 'Posts':
				$response = $Posts -> delete($conn, $data);
				break;

			case 'Pages':
				$response = $Pages -> delete($conn, $data);
				break;

			case 'Tags':
				$response = $Tags -> delete($conn, $data);
				break;

			case 'Translations':
				$response = $Translations -> delete($conn, $data);
				break;

			case 'Categories':
				$response = $Categories -> delete($conn, $data);
				break;

			case 'Uploads':
				$response = $Uploads -> delete($conn, $data);
				break;

		}

		$conn -> close();

		return $response;
	}

	//
	// system

	public function user_login ($data) {
		$conn = new mysqli(...CFG_DB_CONN);
		$Profile = new Profile;
		$response = $Profile -> login($conn, $data);
		$conn -> close();

		return $response;
	}

	public function user_logout () {
		$Profile = new Profile;

		return $Profile -> logout();
	}

	public function user_lost_password ($data) {
		$conn = new mysqli(...CFG_DB_CONN);
		$Profile = new Profile;
		$logs = new LogService;
		$response = $Profile -> lost_password($conn, $data);
		$logs -> create(
			$Profile -> get($conn)['id'],
			'lost-password',
			'ok'
		);
		$conn -> close();

		return $response;
	}

	public function user_lost_password_reset ($data) {
		$conn = new mysqli(...CFG_DB_CONN);
		$Profile = new Profile;
		$response = $Profile -> lost_password_reset($conn, $data);
		$conn -> close();

		return $response;
	}

	//
	//

	public function install_language ($data) {
		$conn = new mysqli(...CFG_DB_CONN);
		$Settings = new Settings;
		$Installer = new InstallerService;
		$Profile = new Profile;
		$logs = new LogService;
		$modules = $Settings -> get_modules($conn);
		$languages = $Settings -> get_languages($conn);
		$response = $Installer -> install_language($conn, $data, $modules, $languages);
		$logs -> create(
			$Profile -> get($conn)['id'],
			'language-install',
			'ok'
		);
		$conn -> close();

		return $response;
	}

	public function install_module ($data) {
		$conn = new mysqli(...CFG_DB_CONN);
		$Settings = new Settings;
		$Installer = new InstallerService;
		$Profile = new Profile;
		$logs = new LogService;
		$languages = $Settings -> get_languages($conn);
		$response = $Installer -> install_module($conn, $data, $languages);
		$logs -> create(
			$Profile -> get($conn)['id'],
			'module-install',
			'ok'
		);
		$conn -> close();

		return $response;
	}

	//
	//

	public function export_table_dump () {
		$conn = new mysqli(...CFG_DB_CONN);
		$SqlDumper = new SqlService;
		$Profile = new Profile;
		$logs = new LogService;
		$id = $Profile -> get($conn)['id'];
		$logs -> create(
			$id,
			'sql-export',
			'ok'
		);

		if ($id) {
			return $SqlDumper -> export_table_dump();
		} else {
			return null;
		}
	}

	public function import_table_data ($data) {
		$SqlDumper = new SqlService;
		$response = $SqlDumper -> import_table_data($data);

		return $response;
	}

}
