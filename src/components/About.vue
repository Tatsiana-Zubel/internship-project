<template>
    <div class="about">
        <div class="top pt-lg-5 pb-lg-3 pt-md-5 pt-sm-5">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-md-12 text-center pt-5 pr-0 mr-0 pb-lg-5 pb-md-5 pb-sm-4">
                            <div class="main-title pb-lg-5 mb-lg-4 pb-md-5 pt-lg-5 text-white"
                                 v-html="displayContent('about title')"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="values container">
            <div class="row pt-lg-4 pb-lg-4 mr-0 pt-md-4 pt-sm-4">

                <div class="col-lg-5 pl-lg-5 offset-lg-1 pt-lg-4">
                    <p class="text-lg-left pb-lg-3 pt-md-2 pt-sm-2" v-html="displayContent('description 1')"/>
                    <p class="text-lg-left pt-lg-3 pt-md-2 pt-sm-2" v-html="displayContent('description 3')"/>
                </div>

                <div class="col-lg-5 pl-lg-5 pb-lg-3">
                    <p class="text-lg-left pt-lg-3 pt-md-2 pt-sm-2" v-html="displayContent('description 2')"/>
                    <p class="text-lg-left pt-lg-3 pt-md-2 pt-sm-2" v-html="displayContent('description 4')"/>
                </div>
            </div>
        </div>

        <div class="partners pt-md-5 pt-sm-5">
            <div class="container pt-lg-4 pb-lg-4">
                <div class="row text-center mr-0 pt-lg-5">
                    <div class="col-lg-12 col-md-12 text-center">
                        <p class="partners-tilte pb-lg-4" v-html="displayContent('partners title')"/>
                    </div>
                    <div class="container pl-lg-5 pr-lg-5">
                        <div class="row pb-4 pl-5 pr-5">

                            <div class="col-lg-3 pr-lg-3 pl-lg-3">
                                <div class="icon-round p-3">
                                    <i class="fa fa-building" style="color:black;"></i>
                                </div>
                                <div class="text-center" v-html="displayContent('trading businesses')">
                                </div>
                            </div>

                            <div class="col-lg-3 pl-lg-3 pr-lg-3">
                                <div class="icon-round p-3">
                                    <i class="fa fa-credit-card" style="color:black;"></i>
                                </div>
                                <div class="text-center" v-html="displayContent('providers')">
                                </div>
                            </div>

                            <div class="col-lg-3 pl-lg-3 pr-lg-3">
                                <div class="icon-round p-3">
                                    <i class="fa fa-shopping-cart" style="color:black;"></i>
                                </div>
                                <div class="text-center" v-html="displayContent('commerce')">
                                </div>

                            </div>

                            <div class="col-lg-3 pl-lg-3 pr-lg-3">
                                <div class="icon-round p-3">
                                    <i class="fa fa-university" style="color:black;"></i>
                                </div>
                                <div class="text-center" v-html="displayContent('banks')"></div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="container team">
            <div class="about-team pt-lg-5">
                <div class="row text-center mr-0">
                    <div class="col-lg-12 col-md-12 text-center">
                        <div class="pt-5 pb-lg-5" v-html="displayContent('team title')">
                        </div>
                    </div>
                </div>
            </div>

            <div class="about-team-content container-fluid pl-lg-5 pr-lg-5 pb-md-5">
                <div class="row row-eq-height g-2 pb-lg-5 justify-content-center">
                    <div class="offset-col-1 col-lg-3 col-md-4" v-for="teamMember of teamMembers"
                         v-bind:key="teamMember.id">
                        <div class="card  align-items-center border-0 pb-lg-3" style="margin: 0">
                            <img class="card-img" style="max-width: 100%" :src="teamMember.pictureUrl">
                            <div class="card-body text-center d-flex flex-column">
                                <h3 class="card-title mt-auto">{{ teamMember.name }} {{ teamMember.surname }}</h3>
                                <p class="card-text mt-auto">{{ teamMember.role }}</p>
                                <a class="text-secondary mt-auto" :href="teamMember.linkedinUrl">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="career">
                <div class="container-bg container-fluid pt-lg-5">
                    <div class="row text-center mr-0">
                        <div class="col-lg-12 col-md-12 text-center">
                            <div class="join pb-lg-2 pt-md-5 pt-sm-5" v-html="displayContent('join us title')">
                            </div>
                        </div>
                    </div>

                    <div class="careers container pt-md-4 pt-sm-4git">
                        <div class="row mr-0 justify-content-center ">
                            <div class="col-lg-6  pl-lg-4 pb-lg-5 text-center pt-md-4 pt-sm-4 pb-md-4 pb-sm-4">
                                <p class="text pb-md-3 pb-sm-3" v-html="displayContent('join us content')">
                                </p>
                                <div class="positions pt-lg-4 pb-lg-5 pb-md-4 pb-sm-4"
                                     v-html="displayContent('open positions')">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

    export default {
        data() {
            return {
                teamApiData: [],
                // content: []
                content: [
                    {
                        id: 1,
                        name: 'about title',
                        data: `<h4>${this.lorem()}</h4><h1>${this.lorem()} <br> ${this.lorem()}</h1>`,
                        page: 'About',
                    },
                    {
                        id: 2,
                        name: 'description 1',
                        data: `<h4 class="my-3">${this.lorem()}</h4><p>${this.lorem()}</p>`,
                        page: 'About'
                    },
                    {
                        id: 3,
                        name: 'description 2',
                        data: `<h4 class="my-3">${this.lorem()}</h4> ${this.lorem()}`,
                        page: 'About'
                    },
                    {
                        id: 4,
                        name: 'description 3',
                        data: `<h4 class="my-3">${this.lorem()}</h4> ${this.lorem()}`,
                        page: 'About'
                    },
                    {
                        id: 5,
                        name: 'description 4',
                        data: `<h4 class="my-3">${this.lorem()}</h4> ${this.lorem()}`,
                        page: 'About'
                    },
                    {
                        id: 6,
                        name: 'description 5',
                        data: `<h6>${this.lorem()}</h6> ${this.lorem()}`,
                        page: 'About'
                    },
                    {
                        id: 7,
                        name: 'partners title',
                        data: `<h5>${this.lorem()}</h5><h1>${this.lorem()}</h1>`,
                        page: 'About',
                    },
                    {
                        id: 8,
                        name: 'trading businesses',
                        data: `<h4 class="my-3">${this.lorem()}</h4><p class="text-center">${this.lorem()}</p>`,
                        page: 'About'
                    },
                    {
                        id: 9,
                        name: 'providers',
                        data: `<h4 class="my-3">${this.lorem()}</h4><p class="text-center">${this.lorem()}</p>`,
                        page: 'About'
                    },
                    {
                        id: 10,
                        name: 'commerce',
                        data: `<h4 class="my-3">${this.lorem()}</h4><p class="text-center">${this.lorem()}</p>`,
                        page: 'About'
                    },
                    {
                        id: 11,
                        name: 'banks',
                        data: `<h4 class="my-3">${this.lorem()}</h4><p class="text-center">${this.lorem()}</p>`,
                        page: 'About'
                    },
                    {
                        id: 12,
                        name: 'team title',
                        data: `<h5>${this.lorem()}</h5><h1>${this.lorem()}</h1>`,
                        page: 'About'
                    },
                    {
                        id: 13,
                        name: 'join us title',
                        data: `<h5>${this.lorem()}</h5><h1>${this.lorem()}</h1>`,
                        page: 'About'
                    },
                    {
                        id: 14,
                        name: 'join us content',
                        data: `${this.lorem()}`,
                        page: 'About'
                    },
                    {
                        id: 15,
                        name: 'open positions',
                        data: `<h5>${this.lorem()}</h5>`,
                        page: 'About'
                    },

                ]
            }
        },
        computed: {
            teamMembers() {
                return [
                    {
                        id: 1,
                        pictureUrl: 'http://via.placeholder.com/300',
                        name: this.lorem({count: 1}),
                        surname: this.lorem({count: 1}),
                        role: this.lorem({count: 1}),
                        linkedinUrl: this.lorem({count: 1}),
                    },
                    {
                        id: 2,
                        pictureUrl: 'http://via.placeholder.com/300',
                        name: this.lorem({count: 1}),
                        surname: this.lorem({count: 1}),
                        role: this.lorem({count: 1}),
                        linkedinUrl: this.lorem({count: 1}),
                    },
                    {
                        id: 3,
                        pictureUrl: 'http://via.placeholder.com/300',
                        name: this.lorem({count: 1}),
                        surname: this.lorem({count: 1}),
                        role: this.lorem({count: 1}),
                        linkedinUrl: this.lorem({count: 1}),
                    },
                ];
            }
        },
        methods: {
            displayContent(name) {
                if (this.content.find(c => c.name === name)) {
                    return this.content.find(c => c.name === name).data;
                }
                return null;
            },
        },
        mounted() {

        }
    }

</script>

<style scoped>

</style>
