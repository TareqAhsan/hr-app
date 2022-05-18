const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/leave-records",
        component: () => import("src/components/LeaveRecords.vue"),
        
      },
      { path: "/login", component: () => import("src/pages/Login.vue") },
      {
        path: "/register",
        component: () => import("components/Signup.vue"),
      },
      {
        path: "/manager",
        component: () => import('src/pages/Manager.vue'),
      },
      {
        path: "/admin",
        component: () => import('src/pages/admin.vue'),
      },
    ],
  },

 
 

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
