var gulp=require('gulp').
    minjs=require('ulp-uglify'),
    minifycss=require('gulp-minify-css'),
    mRename = require('gulp-rename');//重命名

// 任务开始
gulp.task("minjs",function(){
	gulp.src('app.jsx')
	.pipe(minjs({
		preserveComments:"all"
	}))
	.pipe(mRename({
		extname:".min.jsx"
	}))
	.pipe(gulp.dest('/'));
});

gulp.task("default",['minjs']);

