import fs from "fs/promises" ;
import fsn from "fs" ;
import path from "path";

const basepath = "E:\\Web Dev\\Backend cwh\\cls07_exercise" ;
const files = await fs.readdir(basepath) ;

for (const item of files) {
    // console.log(item);
    let ext = "" ;
    if(item.includes('.')) {
        ext = item.split(".",item.length-1)[1] ;
        if(ext != 'js' && ext != 'json') {
            if(fsn.existsSync(path.join(basepath,ext))) {
                fs.rename(path.join(basepath,item),path.join(basepath,ext,item)) ;
            }
            else {
                fs.mkdir(ext) ;
                fs.rename(path.join(basepath,item),path.join(basepath,ext,item)) ;
            }
        }
    }
    
}