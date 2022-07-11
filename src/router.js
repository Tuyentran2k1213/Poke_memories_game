import { createRouter, createWebHashHistory } from "vue-router";

import { ResultPage, PlayGroundPage, MainPage } from "./components/pages/page";

const routes = [
    { path: '/', component: MainPage},
    { path: '/play/:level', component: PlayGroundPage },
    { path: '/result', component: ResultPage }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;