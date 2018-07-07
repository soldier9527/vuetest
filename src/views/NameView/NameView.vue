<template>
   <div>
       NameView
       <div>
            内容有3块，主体内容main,侧边slider,条bar
       </div>
       <router-link to='/nameView/normal'>normal</router-link>
       <br>
       <router-link to='/nameView/special'>special</router-link>

        <router-view class="view "></router-view>
        <router-view name="two"></router-view>
        <router-view name="three"></router-view>
   </div>
</template>
