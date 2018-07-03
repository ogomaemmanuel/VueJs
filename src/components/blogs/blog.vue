<template>
    <div>
        <div class="grid-x">
            <div class="small-2 large-2 cell">

                <ul class="menu vertical expanded">


                    <li>
                        <router-link :to="{name: 'blogcreate'}">Create</router-link>
                        <router-link :to="{name: 'bloglist'}">Old Blogs</router-link>
                    </li>

                </ul>

            </div>
            <div class="small-10 large-10 cell">

                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>

</style>