<template>
    <div class="container-fluid">
        <div class="row ml-0 mr-0 services-description text-center">
            <div class="col-10 mx-auto">
                <div class="">
                    <div v-html="displayContent('service title')"/>
                </div>
                <div class="row mt-3 text-center">
                    <div class="i-container col-lg-4 col-md-6 col-sm-12">
                        <div class="icon-round p-3">
                            <i class="fas fa-user-shield" size="1x"></i>
                        </div>
                        <div v-html="displayContent('one and two')"/>
                    </div>
                    <div class="i-container col-lg-4 col-md-6 col-sm-12">
                        <div class="icon-round p-3">
                            <i class="fas fa-euro-sign" size="1x"></i>
                        </div>
                        <div v-html="displayContent('changes three')"/>
                    </div>
                    <div class="i-container col-lg-4 col-md-6 col-sm-12">
                        <div class="icon-round p-3">
                            <i class="fas fa-shopping-cart" size="1x"></i>
                        </div>
                        <div v-html="displayContent('four five')"/>
                    </div>
                    <div class="i-container col-lg-4 col-md-6 col-sm-12">
                        <div class="icon-round p-3">
                            <i class="fas fa-users" size="1x"></i>
                        </div>
                        <div v-html="displayContent('six seven')"/>
                    </div>
                    <div class="i-container col-lg-4 col-md-6 col-sm-12">
                        <div class="icon-round p-3">
                            <i class="fas fa-credit-card" size="1x"></i>
                        </div>
                        <div v-html="displayContent('eight nine')"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="services-categories">
            <div class="col-10 mx-auto">
                <div class="row btn-group mx-0">
                    <router-link :to="{name: 'BusinessesIndividuals'}"
                                 :class="{'active-btn': $route.name === 'BusinessesIndividuals', 'not-active-btn': $route.name !== 'BusinessesIndividuals'}"
                                 class="btn btn-lg rounded-0 col-lg-6 col-md-6 col-sm-12">Some Service
                    </router-link>
                    <router-link :to="{name: 'ServiceProviders'}"
                                 :class="{'active-btn': $route.name === 'ServiceProviders', 'not-active-btn': $route.name !== 'ServiceProviders'}"
                                 class="btn btn-lg rounded-0 col-lg-6 col-md-6 col-sm-12">For Services
                        Providers
                    </router-link>
                    <router-link :to="{name: 'Ecommerce'}"
                                 :class="{'active-btn': $route.name === 'Ecommerce', 'not-active-btn': $route.name !== 'Ecommerce'}"
                                 class="btn btn-lg rounded-0 col-lg-6 col-md-6 col-sm-12">For Services
                    </router-link>
                    <router-link :to="{name: 'ReferralProgram'}"
                                 :class="{'active-btn': $route.name === 'ReferralProgram', 'not-active-btn': $route.name !== 'ReferralProgram'}"
                                 class="btn btn-lg rounded-0 col-lg-6 col-md-6 col-sm-12">Services Program
                    </router-link>
                </div>
                <router-view></router-view>
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
                    name: 'service title',
                    data: '<h1>Services</h1>' +
                        `<p class="text-muted pt-3 top-p mb-5">${this.lorem()}</p>`,
                    page: 'Services'
                },
                {
                    id: 2,
                    name: 'accounts and transfers',
                    data: `<h4 class="my-3">Services & Services</h4><p class="text-center text-muted">${this.lorem()}</p>`,
                    page: 'Services'
                },
                {
                    id: 3,
                    name: 'currency exchange',
                    data: `<h4 class="my-3">Services</h4><p class="text-center text-muted">${this.lorem()}</p>`,
                    page: 'Services'
                },
                {
                    id: 4,
                    name: 'e-commerce',
                    data: `<h4 class="my-3">Services</h4><p class="text-center text-muted">${this.lorem()}</p>`,
                    page: 'Services'
                },
                {
                    id: 5,
                    name: 'remittance',
                    data: `<h4 class="my-3">Services</h4><p class="text-center text-muted">${this.lorem()}</p>`,
                    page: 'Services'
                },
                {
                    id: 6,
                    name: 'payment cards',
                    data: `<h4 class="my-3">Services Services</h4><p class="text-center text-muted">${this.lorem()}</p>`,
                    page: 'Services'
                }

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
    }
}

</script>
