<template>
    <div class="text-left referral-container">
        <div v-html="displayContent('referral title')"/>
        <div v-html="displayContent('referral description')"/>
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
                    name: 'referral title',
                    data: '<h2 class="mb-5">Service program</h2>',
                    page: 'Services'
                },
                {
                    id: 2,
                    name: 'referral description',
                    data: `<p class="text-muted">${this.lorem()} <br>${this.lorem()}</p>`,
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


