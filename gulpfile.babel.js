import { src, dest, series, parallel, watch } from 'gulp';
import colors from 'colors';
import cliProgress from 'cli-progress';
import del from 'del';
import browserify from 'browserify';
import tsify from 'tsify';
import vinylSource from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';
import gulpReplace from 'gulp-replace';
import gulpRename from 'gulp-rename';
import gulpHtmlMin from 'gulp-htmlmin';
import gulpJsonMinify from 'gulp-jsonminify';
import gulpImageMin from 'gulp-image';
import babelify from 'babelify';
import gulpUglify from 'gulp-uglify';
import gulpSourceMaps from 'gulp-sourcemaps';
import gulpCleanCss from 'gulp-clean-css';
import gulpCssImport from 'gulp-cssimport';

const sass = require('gulp-sass')(require('sass'));

import CFG from './gulp.config';
import { date } from './src/libs/utils';

const ROOT = CFG.PATH_BASE;
const PATH_SRC = ROOT + CFG.PATH_SOURCE;
const PATH_DEV = ROOT + CFG.PATH_DEVELOPMENT;
const PATH_TEST = ROOT + CFG.PATH_TEST;
const PATH_PROD = ROOT + CFG.PATH_PRODUCTION;

const options = {
	Html: {
		htmlMin: {
			collapseWhitespace: true,
			removeComments: true,
		},
	},
	Scripts: {
		Admin: {
			babelify: {
				presets: ['@babel/preset-env', '@babel/preset-react'],
				plugins: ['@babel/plugin-transform-runtime'],
			},
		},
		Web: {
			babelify: {
				presets: ['@babel/preset-env', '@babel/preset-react'],
				plugins: ['@babel/plugin-transform-runtime'],
			},
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		sourcemaps: {
			largeFile: true,
		},
		minify: {
			ext: {
				min: '.min.js',
			},
			preserveComments: 'all',
		},
		debug_dev: false,
		debug_test: false,
		debug_prod: true,
	},
	Styles: {
		cleanCss: {
			compatibility: 'ie9',
		},
		rename: {
			suffix: '.min',
		},
	},
	Watch: {
		watch: {},
	},
};
const utils = {
	getPathSuffix: () => {
		let path = '**/*';
		if (!CFG.CLEAN_WITH_LOGS && CFG.CLEAN_WITH_UPLOADS) {
			path = `!(${CFG.FOLDER_LOGS}*)**/*`;
		} else if (CFG.CLEAN_WITH_LOGS && !CFG.CLEAN_WITH_UPLOADS) {
			path = `!(${CFG.FOLDER_UPLOADS}**/*)**/*`;
		} else if (!CFG.CLEAN_WITH_LOGS && !CFG.CLEAN_WITH_UPLOADS) {
			path = `!(${CFG.FOLDER_UPLOADS}**/*)(${CFG.FOLDER_LOGS}*)**/*`;
		}

		return path;
	},
};
const watchSource = {
	html: [
		PATH_SRC + CFG.FOLDER_ADMIN + '**/*.html',
		PATH_SRC + CFG.FOLDER_ADMIN + '**/*.htm',
	],
	json: [
		`${PATH_SRC}${CFG.FOLDER_ADMIN}**/*.json`,
		`!${PATH_SRC}${CFG.FOLDER_ADMIN}**/scripts/**/*.json`,
	],
	images: [PATH_SRC + CFG.FOLDER_ADMIN + `${CFG.FOLDER_STYLES_IMAGES}**/*`],
	php: [
		`!(${CFG.FOLDER_VENDOR}*)/**/*`,
		PATH_SRC + '**/*.php',
		PATH_SRC + '**/.htaccess',
		PATH_SRC + '**/*.xml',
		PATH_SRC + '**/*.txt',
	],
	fonts: {
		admin: [PATH_SRC + CFG.FOLDER_ADMIN + `${CFG.FOLDER_STYLES_FONTS}**/*`],
		web: [PATH_SRC + CFG.FOLDER_WEB + `${CFG.FOLDER_STYLES_FONTS}**/*`],
	},
	static: [PATH_SRC + CFG.FOLDER_STATIC + '**/*'],
	scripts: {
		admin: [
			PATH_SRC + CFG.FOLDER_ADMIN + '**/*.js',
			PATH_SRC + CFG.FOLDER_ADMIN + '**/*.jsx',
			PATH_SRC + CFG.FOLDER_ADMIN + '**/*.ts',
			PATH_SRC + CFG.FOLDER_ADMIN + '**/*.tsx',
			`${PATH_SRC}${CFG.FOLDER_ADMIN}**/scripts/**/*.json`,
		],
		web: [
			PATH_SRC + CFG.FOLDER_WEB + '**/*.js',
			PATH_SRC + CFG.FOLDER_WEB + '**/*.jsx',
			PATH_SRC + CFG.FOLDER_WEB + '**/*.ts',
			PATH_SRC + CFG.FOLDER_WEB + '**/*.tsx',
		],
	},
	styles: {
		admin: [
			PATH_SRC + CFG.FOLDER_ADMIN + `${CFG.FOLDER_STYLES_INPUT}**/*.scss`,
		],
		web: [PATH_SRC + CFG.FOLDER_WEB + `${CFG.FOLDER_STYLES_INPUT}**/*.scss`],
	},
};

const progressBar = new cliProgress.SingleBar({
	format:
		'# ' +
		colors.grey('Building') +
		' ' +
		colors.yellow('{env}') +
		' | ' +
		colors.grey('Tasks') +
		' ' +
		colors.yellow('{value}/{total}') +
		' |' +
		colors.bgBlack.white('{bar}') +
		'| ' +
		colors.yellow('{percentage}%'),
	barCompleteChar: '\u2588',
	barIncompleteChar: '—',
	hideCursor: true,
});

const __clean = {
	dev: (cb) => {
		progressBar.start(12, 1, { env: CFG.ENV_NAME_DEV });
		return del.sync(PATH_DEV + utils.getPathSuffix(), cb());
	},
	test: (cb) => {
		progressBar.start(12, 1, { env: CFG.ENV_NAME_TEST });
		return del.sync(PATH_TEST + utils.getPathSuffix(), cb());
	},
	prod: (cb) => {
		progressBar.start(12, 1, { env: CFG.ENV_NAME_PROD });
		return del.sync(PATH_PROD + utils.getPathSuffix(), cb());
	},
};
const __environment = {
	dev: (cb) => {
		src(ROOT + CFG.ENV_INPUT_FILE)
			.pipe(gulpReplace(CFG.KEY_ENV_ENV, CFG.ENV_NAME_DEV))
			.pipe(gulpReplace(CFG.KEY_ENV_TIMESTAMP, date.getTimestampString()))
			.pipe(gulpRename(CFG.ENV_OUTPUT_FILE))
			.pipe(dest(PATH_DEV + CFG.FOLDER_CONFIG));
		progressBar.stop();
		cb();
	},
	test: (cb) => {
		src(ROOT + CFG.ENV_INPUT_FILE)
			.pipe(gulpReplace(CFG.KEY_ENV_ENV, CFG.ENV_NAME_TEST))
			.pipe(gulpReplace(CFG.KEY_ENV_TIMESTAMP, date.getTimestampString()))
			.pipe(gulpRename(CFG.ENV_OUTPUT_FILE))
			.pipe(dest(PATH_TEST + CFG.FOLDER_CONFIG));
		progressBar.stop();
		cb();
	},
	prod: (cb) => {
		src(ROOT + CFG.ENV_INPUT_FILE)
			.pipe(gulpReplace(CFG.KEY_ENV_ENV, CFG.ENV_NAME_PROD))
			.pipe(gulpReplace(CFG.KEY_ENV_TIMESTAMP, date.getTimestampString()))
			.pipe(gulpRename(CFG.ENV_OUTPUT_FILE))
			.pipe(dest(PATH_PROD + CFG.FOLDER_CONFIG));
		progressBar.stop();
		cb();
	},
};
const __php = {
	dev: (cb) => {
		src([
			PATH_SRC + '**/*.php',
			PATH_SRC + '**/.htaccess',
			PATH_SRC + '**/*.xml',
			PATH_SRC + '**/*.txt',
		]).pipe(dest(PATH_DEV));
		progressBar.increment();
		cb();
	},
	test: (cb) => {
		src([
			PATH_SRC + '**/*.php',
			PATH_SRC + '**/.htaccess',
			PATH_SRC + '**/*.xml',
			PATH_SRC + '**/*.txt',
		]).pipe(dest(PATH_TEST));
		progressBar.increment();
		cb();
	},
	prod: (cb) => {
		src([
			PATH_SRC + '**/*.php',
			PATH_SRC + '**/.htaccess',
			PATH_SRC + '**/*.xml',
			PATH_SRC + '**/*.txt',
		]).pipe(dest(PATH_PROD));
		progressBar.increment();
		cb();
	},
};
const __html = {
	dev: (cb) => {
		src([PATH_SRC + '**/*.html', PATH_SRC + '**/*.htm']).pipe(dest(PATH_DEV));
		progressBar.increment();
		cb();
	},
	test: (cb) => {
		src([PATH_SRC + '**/*.html', PATH_SRC + '**/*.htm'])
			.pipe(gulpHtmlMin(options.Html.htmlMin))
			.pipe(dest(PATH_TEST));
		progressBar.increment();
		cb();
	},
	prod: (cb) => {
		src([PATH_SRC + '**/*.html', PATH_SRC + '**/*.htm'])
			.pipe(gulpHtmlMin(options.Html.htmlMin))
			.pipe(dest(PATH_PROD));
		progressBar.increment();
		cb();
	},
};
const __json = {
	dev: (cb) => {
		src([`${PATH_SRC}**/*.json`, `!${PATH_SRC}**/scripts/**/*.json`]).pipe(
			dest(PATH_DEV),
		);
		progressBar.increment();
		cb();
	},
	test: (cb) => {
		src([`${PATH_SRC}**/*.json`, `!${PATH_SRC}**/scripts/**/*.json`])
			.pipe(gulpJsonMinify({}))
			.pipe(dest(PATH_TEST));
		progressBar.increment();
		cb();
	},
	prod: (cb) => {
		src([`${PATH_SRC}**/*.json`, `!${PATH_SRC}**/scripts/**/*.json`])
			.pipe(gulpJsonMinify({}))
			.pipe(dest(PATH_PROD));
		progressBar.increment();
		cb();
	},
};
const __static = {
	dev: (cb) => {
		src(PATH_SRC + CFG.FOLDER_STATIC + '**/*').pipe(dest(PATH_DEV));
		progressBar.increment();
		cb();
	},
	test: (cb) => {
		src(PATH_SRC + CFG.FOLDER_STATIC + '**/*').pipe(dest(PATH_TEST));
		progressBar.increment();
		cb();
	},
	prod: (cb) => {
		src(PATH_SRC + CFG.FOLDER_STATIC + '**/*').pipe(dest(PATH_PROD));
		progressBar.increment();
		cb();
	},
};
const __images = {
	dev: {
		admin: (cb) => {
			src(PATH_SRC + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_IMAGES + '**/*').pipe(
				dest(PATH_DEV + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_IMAGES),
			);
			progressBar.increment();
			cb();
		},
		web: (cb) => {
			src(PATH_SRC + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_IMAGES + '**/*').pipe(
				dest(PATH_DEV + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_IMAGES),
			);
			progressBar.increment();
			cb();
		},
	},
	test: {
		admin: (cb) => {
			src(PATH_SRC + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_IMAGES + '**/*')
				.pipe(gulpImageMin())
				.pipe(dest(PATH_TEST + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_IMAGES));
			progressBar.increment();
			cb();
		},
		web: (cb) => {
			src(PATH_SRC + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_IMAGES + '**/*')
				.pipe(gulpImageMin())
				.pipe(dest(PATH_TEST + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_IMAGES));
			progressBar.increment();
			cb();
		},
	},
	prod: {
		admin: (cb) => {
			src(PATH_SRC + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_IMAGES + '**/*')
				.pipe(gulpImageMin())
				.pipe(dest(PATH_PROD + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_IMAGES));
			progressBar.increment();
			cb();
		},
		web: (cb) => {
			src(PATH_SRC + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_IMAGES + '**/*')
				.pipe(gulpImageMin())
				.pipe(dest(PATH_PROD + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_IMAGES));
			progressBar.increment();
			cb();
		},
	},
};
const __fonts = {
	dev: (cb) => {
		src(PATH_SRC + '**/' + CFG.FOLDER_STYLES_FONTS + '**/*').pipe(
			dest(PATH_DEV + '**/' + CFG.FOLDER_STYLES_FONTS),
		);
		progressBar.increment();
		cb();
	},
	test: (cb) => {
		src(PATH_SRC + '**/' + CFG.FOLDER_STYLES_FONTS + '**/*').pipe(
			dest(PATH_TEST + '**/' + CFG.FOLDER_STYLES_FONTS),
		);
		progressBar.increment();
		cb();
	},
	prod: (cb) => {
		src(PATH_SRC + '**/' + CFG.FOLDER_STYLES_FONTS + '**/*').pipe(
			dest(PATH_PROD + '**/' + CFG.FOLDER_STYLES_FONTS),
		);
		progressBar.increment();
		cb();
	},
};
const __styles = {
	dev: {
		admin: (cb) => {
			src(
				PATH_SRC +
					CFG.FOLDER_ADMIN +
					CFG.FOLDER_STYLES_INPUT +
					CFG.STYLES_INPUT_FILE,
			)
				.pipe(sass({}).on('error', sass.logError))
				.pipe(gulpCssImport({}))
				.pipe(dest(PATH_DEV + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_OUTPUT));
			progressBar.increment();
			cb();
		},
		web: (cb) => {
			src(
				PATH_SRC +
					CFG.FOLDER_WEB +
					CFG.FOLDER_STYLES_INPUT +
					CFG.STYLES_INPUT_FILE,
			)
				.pipe(sass({}).on('error', sass.logError))
				.pipe(gulpCssImport({}))
				.pipe(dest(PATH_DEV + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_OUTPUT));
			progressBar.increment();
			cb();
		},
	},
	test: {
		admin: (cb) => {
			src(
				PATH_SRC +
					CFG.FOLDER_ADMIN +
					CFG.FOLDER_STYLES_INPUT +
					CFG.STYLES_INPUT_FILE,
			)
				.pipe(gulpSourceMaps.init({}))
				.pipe(sass({}).on('error', sass.logError))
				.pipe(gulpCssImport({}))
				.pipe(dest(PATH_TEST + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_OUTPUT))
				.pipe(gulpCleanCss(options.Styles.cleanCss))
				.pipe(gulpRename(options.Styles.rename))
				.pipe(gulpSourceMaps.write())
				.pipe(dest(PATH_TEST + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_OUTPUT));
			progressBar.increment();
			cb();
		},
		web: (cb) => {
			src(
				PATH_SRC +
					CFG.FOLDER_WEB +
					CFG.FOLDER_STYLES_INPUT +
					CFG.STYLES_INPUT_FILE,
			)
				.pipe(gulpSourceMaps.init({}))
				.pipe(sass({}).on('error', sass.logError))
				.pipe(gulpCssImport({}))
				.pipe(dest(PATH_TEST + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_OUTPUT))
				.pipe(gulpCleanCss(options.Styles.cleanCss))
				.pipe(gulpRename(options.Styles.rename))
				.pipe(gulpSourceMaps.write())
				.pipe(dest(PATH_TEST + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_OUTPUT));
			progressBar.increment();
			cb();
		},
	},
	prod: {
		admin: (cb) => {
			src(
				PATH_SRC +
					CFG.FOLDER_ADMIN +
					CFG.FOLDER_STYLES_INPUT +
					CFG.STYLES_INPUT_FILE,
			)
				.pipe(gulpSourceMaps.init({}))
				.pipe(sass({}).on('error', sass.logError))
				.pipe(gulpCssImport({}))
				.pipe(dest(PATH_PROD + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_OUTPUT))
				.pipe(gulpCleanCss(options.Styles.cleanCss))
				.pipe(gulpRename(options.Styles.rename))
				.pipe(gulpSourceMaps.write())
				.pipe(dest(PATH_PROD + CFG.FOLDER_ADMIN + CFG.FOLDER_STYLES_OUTPUT));
			progressBar.increment();
			cb();
		},
		web: (cb) => {
			src(
				PATH_SRC +
					CFG.FOLDER_WEB +
					CFG.FOLDER_STYLES_INPUT +
					CFG.STYLES_INPUT_FILE,
			)
				.pipe(gulpSourceMaps.init({}))
				.pipe(sass({}).on('error', sass.logError))
				.pipe(gulpCssImport({}))
				.pipe(dest(PATH_PROD + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_OUTPUT))
				.pipe(gulpCleanCss(options.Styles.cleanCss))
				.pipe(gulpRename(options.Styles.rename))
				.pipe(gulpSourceMaps.write())
				.pipe(dest(PATH_PROD + CFG.FOLDER_WEB + CFG.FOLDER_STYLES_OUTPUT));
			progressBar.increment();
			cb();
		},
	},
};
const __scripts = {
	dev: {
		admin: (cb) => {
			process.env.NODE_ENV = CFG.ENV_NAME_DEV;
			browserify({
				entries: [
					PATH_SRC +
						CFG.FOLDER_ADMIN +
						CFG.FOLDER_SCRIPTS +
						CFG.SCRIPTS_INPUT_FILE,
				],
				extensions: options.Scripts.extensions,
			})
				.plugin(tsify)
				.transform(babelify.configure(options.Scripts.Admin.babelify))
				.bundle()
				.pipe(vinylSource('index.js'))
				.pipe(dest(PATH_DEV + CFG.FOLDER_ADMIN + CFG.FOLDER_SCRIPTS));
			progressBar.increment();
			cb();
		},
		web: (cb) => {
			process.env.NODE_ENV = CFG.ENV_NAME_DEV;
			browserify({
				entries: [
					PATH_SRC +
						CFG.FOLDER_WEB +
						CFG.FOLDER_SCRIPTS +
						CFG.SCRIPTS_INPUT_FILE,
				],
				extensions: options.Scripts.extensions,
			})
				.plugin(tsify)
				.transform(babelify.configure(options.Scripts.Web.babelify))
				.bundle()
				.pipe(vinylSource('index.js'))
				.pipe(dest(PATH_DEV + CFG.FOLDER_WEB + CFG.FOLDER_SCRIPTS));
			progressBar.increment();
			cb();
		},
	},
	test: {
		admin: (cb) => {
			process.env.NODE_ENV = CFG.ENV_NAME_TEST;
			browserify({
				entries: [
					PATH_SRC +
						CFG.FOLDER_ADMIN +
						CFG.FOLDER_SCRIPTS +
						CFG.SCRIPTS_INPUT_FILE,
				],
				extensions: options.Scripts.extensions,
			})
				.plugin(tsify)
				.transform(babelify.configure(options.Scripts.Admin.babelify))
				.bundle()
				.pipe(vinylSource('index.js'))
				.pipe(dest(PATH_TEST + CFG.FOLDER_ADMIN + CFG.FOLDER_SCRIPTS))
				.pipe(vinylBuffer())
				.pipe(gulpSourceMaps.init(options.Scripts.sourcemaps))
				.pipe(gulpRename({ extname: '.min.js' }))
				.pipe(gulpUglify())
				.pipe(gulpSourceMaps.write())
				.pipe(dest(PATH_TEST + CFG.FOLDER_ADMIN + CFG.FOLDER_SCRIPTS));
			progressBar.increment();
			cb();
		},
		web: (cb) => {
			process.env.NODE_ENV = CFG.ENV_NAME_TEST;
			browserify({
				entries: [
					PATH_SRC +
						CFG.FOLDER_WEB +
						CFG.FOLDER_SCRIPTS +
						CFG.SCRIPTS_INPUT_FILE,
				],
				extensions: options.Scripts.extensions,
			})
				.plugin(tsify)
				.transform(babelify.configure(options.Scripts.Web.babelify))
				.bundle()
				.pipe(vinylSource('index.js'))
				.pipe(dest(PATH_TEST + CFG.FOLDER_WEB + CFG.FOLDER_SCRIPTS))
				.pipe(vinylBuffer())
				.pipe(gulpSourceMaps.init(options.Scripts.sourcemaps))
				.pipe(gulpRename({ extname: '.min.js' }))
				.pipe(gulpUglify())
				.pipe(gulpSourceMaps.write())
				.pipe(dest(PATH_TEST + CFG.FOLDER_WEB + CFG.FOLDER_SCRIPTS));
			progressBar.increment();
			cb();
		},
	},
	prod: {
		admin: (cb) => {
			process.env.NODE_ENV = CFG.ENV_NAME_PROD;
			browserify({
				entries: [
					PATH_SRC +
						CFG.FOLDER_ADMIN +
						CFG.FOLDER_SCRIPTS +
						CFG.SCRIPTS_INPUT_FILE,
				],
				extensions: options.Scripts.extensions,
			})
				.plugin(tsify)
				.transform(babelify.configure(options.Scripts.Admin.babelify))
				.bundle()
				.pipe(vinylSource('index.js'))
				.pipe(dest(PATH_PROD + CFG.FOLDER_ADMIN + CFG.FOLDER_SCRIPTS))
				.pipe(vinylBuffer())
				.pipe(gulpSourceMaps.init(options.Scripts.sourcemaps))
				.pipe(gulpRename({ extname: '.min.js' }))
				.pipe(gulpUglify())
				.pipe(gulpSourceMaps.write())
				.pipe(dest(PATH_PROD + CFG.FOLDER_ADMIN + CFG.FOLDER_SCRIPTS));
			progressBar.increment();
			cb();
		},
		web: (cb) => {
			process.env.NODE_ENV = CFG.ENV_NAME_PROD;
			browserify({
				entries: [
					PATH_SRC +
						CFG.FOLDER_WEB +
						CFG.FOLDER_SCRIPTS +
						CFG.SCRIPTS_INPUT_FILE,
				],
				extensions: options.Scripts.extensions,
			})
				.plugin(tsify)
				.transform(babelify.configure(options.Scripts.Web.babelify))
				.bundle()
				.pipe(vinylSource('index.js'))
				.pipe(dest(PATH_PROD + CFG.FOLDER_WEB + CFG.FOLDER_SCRIPTS))
				.pipe(vinylBuffer())
				.pipe(gulpSourceMaps.init(options.Scripts.sourcemaps))
				.pipe(gulpRename({ extname: '.min.js' }))
				.pipe(gulpUglify())
				.pipe(gulpSourceMaps.write())
				.pipe(dest(PATH_PROD + CFG.FOLDER_WEB + CFG.FOLDER_SCRIPTS));
			progressBar.increment();
			cb();
		},
	},
};

const __watch = {
	all: (cb) => {
		watch(watchSource.html, options.Watch.watch, __html.dev);
		watch(watchSource.json, options.Watch.watch, __json.dev);
		watch(watchSource.images, options.Watch.watch, __images.dev.admin);
		watch(watchSource.images, options.Watch.watch, __images.dev.web);
		watch(watchSource.php, options.Watch.watch, __php.dev);
		watch(
			[...watchSource.fonts.admin, ...watchSource.fonts.web],
			options.Watch.watch,
			__fonts.dev,
		);
		watch(watchSource.static, options.Watch.watch, __static.dev);
		watch(watchSource.scripts.admin, options.Watch.watch, __scripts.dev.admin);
		watch(watchSource.scripts.web, options.Watch.watch, __scripts.dev.web);
		watch(watchSource.styles.admin, options.Watch.watch, __styles.dev.admin);
		watch(watchSource.styles.web, options.Watch.watch, __styles.dev.web);
		cb(
			console.log(
				'#' +
					` Watching changes in whole project structure. You should reload browser manually. `
						.yellow,
			),
		);
	},
	admin: (cb) => {
		watch(watchSource.html, options.Watch.watch, __html.dev);
		watch(watchSource.json, options.Watch.watch, __json.dev);
		watch(watchSource.images, options.Watch.watch, __images.dev);
		watch(watchSource.php, options.Watch.watch, __php.dev);
		watch(watchSource.fonts.admin, options.Watch.watch, __fonts.dev);
		watch(watchSource.static, options.Watch.watch, __static.dev);
		watch(watchSource.scripts.admin, options.Watch.watch, __scripts.dev.admin);
		watch(watchSource.styles.admin, options.Watch.watch, __scripts.dev.web);

		cb(
			console.log(
				'#' +
					` Watching changes in 'admin/' and backend files. You should reload browser manually. `
						.yellow,
			),
		);
	},
	web: (cb) => {
		watch(watchSource.html, options.Watch.watch, __html.dev);
		watch(watchSource.json, options.Watch.watch, __json.dev);
		watch(watchSource.images, options.Watch.watch, __images.dev);
		watch(watchSource.fonts.web, options.Watch.watch, __fonts.dev);
		watch(watchSource.scripts.web, options.Watch.watch, __scripts.dev.admin);
		watch(watchSource.styles.web, options.Watch.watch, __styles.dev.web);

		cb(
			console.log(
				'#' +
					` Watching changes in 'web/' files. You should reload browser manually. `
						.yellow,
			),
		);
	},
};

export const dev = series(
	__clean.dev,
	series(
		__images.dev.admin,
		__images.dev.web,
		__scripts.dev.admin,
		__scripts.dev.web,
		__styles.dev.admin,
		__styles.dev.web,
		__php.dev,
		__html.dev,
		__json.dev,
		__static.dev,
		__fonts.dev,
	),
	__environment.dev,
);
export const test = series(
	__clean.test,
	series(
		__images.test.admin,
		__images.test.web,
		__scripts.test.admin,
		__scripts.test.web,
		__styles.test.admin,
		__styles.test.web,
		__php.test,
		__html.test,
		__json.test,
		__static.test,
		__fonts.test,
	),
	__environment.test,
);
export const prod = series(
	__clean.prod,
	series(
		__images.prod.admin,
		__images.prod.web,
		__scripts.prod.admin,
		__scripts.prod.web,
		__styles.prod.admin,
		__styles.prod.web,
		__php.prod,
		__html.prod,
		__json.prod,
		__static.prod,
		__fonts.prod,
	),
	__environment.prod,
);
export const start = series(dev, __watch.all);
export const start_admin = series(dev, __watch.admin);
export const start_web = series(dev, __watch.web);

export default dev;
