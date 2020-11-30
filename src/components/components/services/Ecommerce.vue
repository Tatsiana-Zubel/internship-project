<template>
    <div class="text-left">
        <div v-html="displayContent('e-commerce title')"/>
        <div v-html="displayContent('e-commerce paragraph')"/>
        <div v-html="displayContent('benefits title')"/>
        <div class="row">
            <div class="сol-lg-6 col-md-6 col-sm-12">
                <div>
                    <div v-html="displayContent('cross-border title')"/>
                    <div v-html="displayContent('cross-border description')"/>
                </div>
                <div>
                    <div v-html="displayContent('no limits title')"/>
                    <div v-html="displayContent('no limits description')"/>
                </div>
                <div>
                    <div v-html="displayContent('flexible title')"/>
                    <div v-html="displayContent('flexible description')"/>
                </div>
            </div>
            <div class="сol-lg-6 col-md-6 col-sm-12">
                <div>
                    <div v-html="displayContent('foreign exchange title')"/>
                    <div v-html="displayContent('foreign exchange description')"/>
                </div>
                <div>
                    <div v-html="displayContent('effective title')"/>
                    <div v-html="displayContent('effective description')"/>
                </div>
                <div>
                    <div v-html="displayContent('fully compliant title')"/>
                    <div v-html="displayContent('fully compliant description')"/>
                </div>
            </div>
        </div>
        <div class="text-center mt-3">
            <a href="#" target="_blank" class="btn-link">
                Contact us
            </a>
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
                    name: 'e-commerce title',
                    data: '<h2 class="mb-5">For services</h2>',
                    page: 'services/ecommerce'
                },
                {
                    id: 2,
                    name: 'e-commerce paragraph',
                    data: `<p class="text-muted">${this.lorem()}</p>`,
                    page: 'services/ecommerce'
                },
                {
                    id: 3,
                    name: 'benefits title',
                    data: '<h2 class="my-5">Some Services</h2>',
                    page: 'services/ecommerce'
                },
                {
                    id: 4,
                    name: 'benefits title',
                    data: '<h2 class="my-5">Some Services</h2>',
                    page: 'services/ecommerce'
                },
                {
                    id: 5,
                    name: 'cross-border title',
                    data: '<h3 class="float-left">1.&nbsp</h3>' +
                        '<h3>Some Services</h3>',
                    page: 'services/ecommerce'
                },
                {
                    id: 6,
                    name: 'cross-border description',
                    data: `<p class="mt-4 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services/ecommerce'
                },
                {
                    id: 7,
                    name: 'no limits title',
                    data: '<h3 class="float-left">2.&nbsp</h3>' +
                        '<h3>Some Services</h3>',
                    page: 'services/ecommerce'
                },
                {
                    id: 8,
                    name: 'no limits description',
                    data: `<p class="mt-3 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services/ecommerce'
                },
                {
                    id: 9,
                    name: 'flexible title',
                    data: '<h3 class="float-left">3.&nbsp</h3>' +
                        '<h3>Some Services</h3>',
                    page: 'services/ecommerce'
                },
                {
                    id: 10,
                    name: 'flexible description',
                    data: `<p class="mt-3 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services/ecommerce'
                },
                {
                    id: 11,
                    name: 'foreign exchange title',
                    data: ' <h3 class="float-left">4.&nbsp</h3>' +
                        '<h3>Some Services</h3>',
                    page: 'services/ecommerce'
                },
                {
                    id: 12,
                    name: 'foreign exchange description',
                    data: `<p class="mt-3 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services/ecommerce'
                },
                {
                    id: 13,
                    name: 'effective title',
                    data: '<h3 class="float-left">5.&nbsp</h3>' +
                        '<h3>Some Services</h3>',
                    page: 'services/ecommerce'
                },
                {
                    id: 14,
                    name: 'effective description',
                    data: `<p class="mt-3 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services/ecommerce'
                },
                {
                    id: 15,
                    name: 'fully compliant title',
                    data: '<h3 class="float-left">6.&nbsp</h3>' +
                        '<h3>Some Services</h3>',
                    page: 'services/ecommerce'
                },
                {
                    id: 16,
                    name: 'fully compliant description',
                    data: `<p class="mt-3 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services/ecommerce'
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
    }
}

</script>


<style scoped>
a {
    color: #d83135;
}

.btn-link {
    border-radius: 50px;
    background: transparent;
    color: #d83135;
    border: 1px solid #d83135;
    padding: 14px 60px;
    text-decoration: none;
}

.btn-link:focus {
    outline: none;
}

.btn-link:hover {
    background: #d83135;
    color: #ffffff;
}
</style>
