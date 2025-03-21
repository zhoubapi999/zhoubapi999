#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹（ 进入VuePress打包后的文件夹根目录 ）
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://gitee.com/zhoubapi999/zhoubapi999.git master:gh-pages

cd -

git init
git add -A
git commit -m '提交博客'
git push -f https://gitee.com/zhoubapi999/zhoubapi999.git master