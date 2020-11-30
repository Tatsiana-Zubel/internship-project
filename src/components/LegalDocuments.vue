<template>
    <div class="doc-container">
        <div class="container">
            <div class="doc-heading text-center">
                <h1>All documents</h1>
            </div>
            <div class="doc-list mt-5">
                <ul class="d-flex flex-column">
                    <router-view></router-view>
                    <li class="doc-item"
                        @mouseover="document.active = true"
                        @mouseleave="document.active = false" v-for="document in documents" v-bind:key="document.id">
                        <router-link :to="{name: document.routeName}" class="border-bottom btn btn-lg text-left doc-btn text-muted"
                                     :class="{'hover-space': document.active}">
                           <span class="doc-icon-container">
                               <i class="fas fa-angle-right doc-icon" size=1x v-if="!document.active"> </i>
                               <i class="fas fa-angle-double-right doc-icon" size=1x v-if="document.active"> </i>
                           </span>
                            {{ document.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                documents: [
                    {
                        id: 1,
                        title: 'Terms and Conditions',
                        routeName: 'TermsAndConditions',
                        active: false,
                    },
                    {
                        id: 2,
                        title: 'Privacy Policy',
                        routeName: 'PrivacyPolicy',
                        active: false,
                    },
                    {
                        id: 3,
                        title: 'Cookies Policy',
                        routeName: 'CookiesPolicy',
                        active: false,
                    },
                    {
                        id: 4,
                        title: 'Recommendations for safe use',
                        routeName: 'Recommendations',
                        active: false,
                    },
                ]
            }
        }
    }
</script>
