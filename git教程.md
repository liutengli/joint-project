git branch  查看当前分支

git checkout -b dev 创建dev分支，并且换到dev分支

git branch dev 创建

git checkout dev  切换

git push origin master 推送到远程仓库

git push origin dev

从远程仓库获取
$ git fetch origin master

//从远程的origin仓库的master分支下载代码到本地的origin master

$ git log -p master.. origin/master

//比较本地的仓库和远程参考的区别

$ git merge origin/master//把远程下载下来的代码合并到本地仓库，远程的和本地的合并


git reset --hard id名 //回到对应的版本


推送
```bash

 切回master分支，从服务器获取master分支最新的内容

```bash
git checkout master
```

5. 合并刚才的临时开发分支到master之上

```bash
git merge 临时的开发分支
```

6. 把合并之后的master分支推送到服务器

```bash
git push
```

git reflog   查看版本
```


npm run build //打包文件

npm i anywhere -g   //本地临时服务器
命令 anywhere 启动
