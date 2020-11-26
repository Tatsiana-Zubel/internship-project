<template>
    <div>
        <div v-html="displayContent('providers title')"/>
        <div class="row">
            <div class="сol-lg-6 col-md-6 col-sm-12">
                <div v-html="displayContent('sepa title')"/>
                <div v-html="displayContent('sepa description')"/>
            </div>
            <div class="сol-lg-6 col-md-6 col-sm-12">
                <div v-html="displayContent('automated payments title')"/>
                <div v-html="displayContent('automated payments description')"/>
            </div>
            <div class="text-center mt-5">
                <a href="#" target="_blank" class="btn-link">
                   Contact us
                </a>
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
                    name: 'providers title',
                    data: '<h2 class="mb-5">Some Services</h2>',
                    page: 'services/providers'
                },
                {
                    id: 2,
                    name: 'sepa title',
                    data: '<h3 class="mb-4">Some Services</h3>',
                    page: 'services/providers'
                },
                {
                    id: 3,
                    name: 'sepa description',
                    data: `<p class="text-muted">${this.lorem()}</p><p class="text-muted">${this.lorem()}</p>`,
                    page: 'services/providers'
                },
                {
                    id: 4,
                    name: 'automated payments title',
                    data: `<h3 class="mb-4">${this.lorem()}</h3>`,
                    page: 'services/providers'
                },
                {
                    id: 5,
                    name: 'automated payments description',
                    data: `<p class="text-muted">${this.lorem()}</p><p class="text-muted">${this.lorem()}</p>`,
                    page: 'services/providers'
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
