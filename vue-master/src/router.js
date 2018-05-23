'use strict'

// import Home from './views/home';
// import New from './views/new';

export default function (router){
    router.map({
        '*':{				//首页
            name:'home',
            component: function(resolve){
                require(['./views/home'], resolve);
            }
        },
        '/':{               //首页
            name:'home',
            component: function(resolve){
                require(['./views/home'], resolve);
            }
        },
        '/new':{               //首页
            name:'new',
            component: function(resolve){
                require(['./views/new'], resolve);
            }
        }
    })
}