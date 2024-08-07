import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({  
    history: createWebHistory(""),  
    routes: [
        // {      
        //     path: "/login", // 추후 루트경로로 변경     
        //     name: "root",
        //     components: { 
        //         login: LoginView
        //     }    
        // },
        // {      
        //     path: "/home",      
        //     name: "home",      
        //     components: { 
        //         default: GoodsList
        //     },    
        // },
        // {
        //     path: '/:pathMatch(.*)*',
        //     name: 'notFound',
        //     components: { 
        //         error: NotFoundView
        //     } 
        // },
    ],
}); 

export default router;
