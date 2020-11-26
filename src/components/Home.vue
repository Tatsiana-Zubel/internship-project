<template>
    <div class="main-page">
        <div class="top pt-lg-5 pb-lg-3 pt-md-5 pb-md-3 pt-sm-5">
            <div class="jumbotron jumbotron-fluid pt-lg-5 pb-lg-3 pt-md-5 pt-sm-5">
                <div class="container">
                    <div class="row justify-content-center text-center pt-lg-5 pb-lg-2 pt-md-5 pt-sm-5">
                        <div class="col-md-12 col-lg-7">
                            <div class="main-title pb-lg-2 pb-md-5" v-html="displayContent('home title')">
                            </div>
                            <div class="subtitle-main pt-lg-1 pb-md-5 pb-sm-5" v-html="displayContent('home subtitle')">
                            </div>
                        </div>
                        <p class="lead">
                            <a class="btn btn-danger btn-lg" href="#" role="button">Open account</a>
                        </p>
                        <div class="scroll pt-lg-5 pt-md-5 pb-md-4 pb-sm-5">
                            <a class="ct-btn-scroll ct-js-btn-scroll" href="#section2">
                                <i class="fa fa-arrow-down fa-2x" style="color:white;"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div id="section2"></div>
            <div class="container payments">
                <div class="row justify-content-center pt-lg-5 pt-md-5 pb-lg-1 pb-md-3 pb-sm-3 pt-sm-5">
                    <div class="col-lg-12 col-md-12 text-center">
                        <div class="payments-title pb-md-3" v-html="displayContent('payments title')">
                        </div>
                    </div>
                </div>

                <div class="container pt-lg-5 pl-lg-5 pr-lg-5">
                    <div class="row justify-content-center text-center pt-lg-2">
                        <div class="col-lg-3 col-md-7 p-lg-2 pr-lg-4">
                            <div class="icon-round p-3">
                                <i class="fa fa-angle-double-right " style="color:black;"></i>
                            </div>
                            <div class="text-center" v-html="displayContent('faster')">
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-7 p-lg-2 pr-lg-4">
                            <div class="icon-round p-3">
                                <i class="fa fa-coins" style="color:black;"></i>
                            </div>
                            <div class="text-center" v-html="displayContent('low fees')">
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-7 p-lg-2 pr-lg-4">
                            <div class="icon-round p-3">
                                <i class="fa fa-search-dollar" style="color:black;"></i>
                            </div>
                            <div class="text-center" v-html="displayContent('transparent')">
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-7 p-lg-2 pr-lg-3">
                            <div class="icon-round p-3">
                                <i class="fa fa-shield-alt" style="color:black;"></i>
                            </div>
                            <div class="text-center" v-html="displayContent('secure')">
                            </div>
                        </div>
                        <p class="lead pt-lg-5 pb-md-4 pb-sm-4">
                            <a class="btn btn-danger btn-lg" href="#" role="button">Read more</a>
                        </p>
                    </div>
                </div>

            </div>


            <div class="solutions">
                <div class="container pt-lg-5 pb-lg-5 pt-sm-5 pt-md-5">
                    <div class="row justify-content-center pb-sm-3 pt-lg-3 pb-lg-5 pt-md-5 pb-md-4">
                        <div class="col-lg-8 col-md-12 text-center">
                            <div class="solutions-title pb-lg-3 pb-md-3 pb-sm-3" v-html="displayContent('solutions')">
                            </div>
                            <div class="solutions-subtitle" v-html="displayContent('services subtitle')">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <div id="carouselExampleFade" class="carousel slide  mx-auto" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="d-block w-100">
                                        <div class="row justify-content-center row-eq-height pb-lg-5">
                                            <div class="col-sm-12 col-lg-3 flex-column">
                                                <div class="card mt-auto">
                                                    <div class="card-body mt-auto flex-column">
                                                        <p class="card-text mt-auto"
                                                           v-html="displayContent('accounts')"></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-lg-3 flex-column">
                                                <div class="card mt-auto">
                                                    <div class="card-body mt-auto">
                                                        <p class="card-text mt-auto"
                                                           v-html="displayContent('exchange')"></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-lg-3 flex-column">
                                                <div class="card mt-auto">
                                                    <div class="card-body mt-auto">
                                                        <p class="card-text mt-auto"
                                                           v-html="displayContent('commerce 2')"></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="d-block w-100">

                                        <div class="row justify-content-center row-eq-height pb-lg-5 pb-md-5">
                                            <div class="col-sm-12 col-lg-3 flex-column">
                                                <div class="card mt-auto">
                                                    <div class="card-body mt-auto flex-column">
                                                        <p class="card-text mt-auto"
                                                           v-html="displayContent('remittance')"></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-lg-3 flex-column">
                                                <div class="card mt-auto">
                                                    <div class="card-body mt-auto">
                                                        <p class="card-text mt-auto"
                                                           v-html="displayContent('cards')"></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleFade" role="button"
                               data-slide="prev">
                                <span class="carousel-control-prev-icon text-danger" aria-hidden="true"><font-awesome-icon
                                        :icon="['fa', 'arrow-left']" size="2x"/></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleFade" role="button"
                               data-slide="next">
                                <span class="carousel-control-next-icon text-danger" aria-hidden="true"><font-awesome-icon
                                        :icon="['fa', 'arrow-right']" size="2x"/></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="clients pt-sm-5 pt-md-5 pb-sm-4 pb-md-4">
                <div class="container">
                    <div class="row justify-content-center text-center pt-lg-4 pt-md-5 pb-md-3">
                        <div class="clients-title pb-lg-4 pt-lg-4 pb-sm-4 pb-md-4"
                             v-html="displayContent('our clients')">
                        </div>
                    </div>
                </div>

                <div class="container pl-lg-5 pr-lg-5">
                    <div class="row justify-content-center text-center pt-lg-2">
                        <div class="col-lg-3 col-md-7 p-lg-2 pr-lg-4">
                            <div class="icon-round p-3">
                                <i class="fa fa-building " style="color:black;"></i>
                            </div>
                            <div class="text-center" v-html="displayContent('businesses')">
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-7 p-lg-2 pr-lg-4">
                            <div class="icon-round p-3">
                                <i class="fa fa-credit-card" style="color:black;"></i>
                            </div>
                            <div class="text-center" v-html="displayContent('providers')">
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-7 p-lg-2 pr-lg-4">
                            <div class="icon-round p-3">
                                <i class="fa fa-shopping-basket" style="color:black;"></i>
                            </div>
                            <div class="text-center" v-html="displayContent('commerce')">
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-7 p-lg-2 pr-lg-3">
                            <div class="icon-round p-3">
                                <i class="fa fa-users" style="color:black;"></i>
                            </div>
                            <div class="text-center" v-html="displayContent('individuals')">
                            </div>
                        </div>
                        <p class="lead pt-lg-5 pb-md-4 pt-md-4 pt-sm-4">
                            <a class="btn btn-danger btn-lg" href="#" role="button">Read more</a>
                        </p>
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
                apiData: [],
                content: [
                    {
                        id: 1,
                        name: 'home title',
                        data: `<h4>${this.lorem()}</h4><div class="title">Business link between <br> Earth and Mars</div>`,
                        page: 'Home',
                    },
                    {
                        id: 2,
                        name: 'home subtitle',
                        data: `<h4 class="text-white pt-lg-5 pb-lg-2">${this.lorem()}</h4>`,
                        page: 'Home',
                    },
                    {
                        id: 3,
                        name: 'payments title',
                        data: `<h5>WHY CHOOSE US</h5><h2>${this.lorem()}</h2>`,
                        page: 'Home',
                    },
                    {
                        id: 4,
                        name: 'faster',
                        data: `<h4 class="my-3">Faster</h4><p class="why-us">${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 5,
                        name: 'low fees',
                        data: `<h4 class="my-3">Low fees</h4><p class="why-us">${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 5,
                        name: 'transparent',
                        data: `<h4 class="my-3">Transparent</h4><p class="why-us">${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 6,
                        name: 'secure',
                        data: `<h4 class="my-3">Trustworthy and Secure</h4><p class="why-us">${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 7,
                        name: 'our clients',
                        data: '<h5>WE DELIVER VALUE TO</h5>' +
                            '<h2>Our Clients</h2>',
                        page: 'Home',
                    },
                    {
                        id: 8,
                        name: 'businesses',
                        data: `<h4 class="my-3">Some Service</h4><p>${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 9,
                        name: 'providers',
                        data: `<h4 class="my-3">Some Service</h4><p>${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 10,
                        name: 'commerce',
                        data: `<h4 class="my-3">Some Service</h4><p>${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 11,
                        name: 'individuals',
                        data: `<h4 class="my-3">Some Service</h4><p>${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 12,
                        name: 'solutions',
                        data: '<h5>YOUR BUSINESS</h5>\n' +
                            '<h2>Our Solutions</h2>',
                        page: 'Home',
                    },
                    {
                        id: 13,
                        name: 'services subtitle',
                        data: `<p>${this.lorem()}</p>`,
                        page: 'Home',
                    },

                    {
                        id: 14,
                        name: 'accounts',
                        data: `<h4 class="my-3">Some Service</h4><p>${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 15,
                        name: 'exchange',
                        data: `<h4 class="my-3">Some Service</h4><p>${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 16,
                        name: 'commerce 2',
                        data: `<h4 class="my-3">Some Service</h4><p>${this.lorem()}</p>`,
                        page: 'Home',
                    },
                    {
                        id: 17,
                        name: 'remittance',
                        data: '<h4 class="my-3">Some Service</h4>' +
                            '<p>\n' +
                            `${this.lorem()} <br> <div class="text-muted">Coming soon</div>` +
                            '</p>',
                        page: 'Home',
                    },
                    {
                        id: 18,
                        name: 'cards',
                        data: '<h4 class="my-3">Some Service</h4>' +
                            '<p>\n' +
                            `${this.lorem()} <br> <div class="text-muted">Coming soon</div>` +
                            '</p>',
                        page: 'Home',
                    },

                ]
            }
        },

        methods: {
            displayContent(name) {
                if (this.content.find(c => c.name === name)) {
                    return this.content.find(c => c.name === name).data;
                }
                return null;
            }
        },
    }
</script>

<style scoped>

</style>