/**
 * Created by gress on 16/7/1.
 */

/**
 * @description 这是顶级的控制器
 * @param {boolean} navbar 用来控制左侧导航栏的开启和关闭,true关,false关
 *
 */
class topController{
    navbar:boolean;
    constructor(){
        this.navbar = false;
    }
    toggleLeft(){
        this.navbar = !this.navbar;
        console.log(this.navbar)
    }
}

export default topController