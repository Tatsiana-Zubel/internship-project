<template>
    <div class="text-left">
        <div v-html="displayContent('your digital title')"/>
        <div v-html="displayContent('your digital content')"/>
        <div>
            <div v-html="displayContent('benefits title')"/>
            <div class="row">
                <div class="benefit-col col-lg-4 col-md-6 col-sm-12">
                    <div v-html="displayContent('multi-currency accounts')"/>
                </div>
                <div class="benefit-col col-lg-4 col-md-6 col-sm-12">
                    <div v-html="displayContent('iban')"/>
                </div>
                <div class="benefit-col col-lg-4 col-md-6 col-sm-12">
                    <div v-html="displayContent('international transfers')"/>
                </div>
                <div class="benefit-col col-lg-4 col-md-6 col-sm-12">
                    <div v-html="displayContent('fx services')"/>
                </div>
                <div class="benefit-col col-lg-4 col-md-6 col-sm-12">
                    <div v-html="displayContent('sepa payments')"/>
                </div>
            </div>
            <div v-html="displayContent('bottom paragraph')"/>
        </div>
        <div>
            <div v-html="displayContent('multi-currency title')"/>
            <img src="/images/currency.png" class="img-fluid mb-4"
                 alt="Some alt text for this">
        </div>
        <div class="text-center pb-2">
            <div v-html="displayContent('how title')"/>
            <div class="container text-center pt-5 pb-4">
                <div class="line"></div>
                <div class="timeline-container">
                    <ul class="timeline d-flex justify-content-between mx-auto pl-0">
                        <li class="timeline-item">
                            <div class="content">
                                <div class="dot"></div>
                                <h4>Some bullet</h4>
                                <p class="text-muted">{{lorem()}}</p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="content">
                                <div class="dot"></div>
                                <h4>Some bullet</h4>
                                <p class="text-muted">{{lorem()}}</p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="content">
                                <div class="dot"></div>
                                <h4>Some bullet</h4>
                                <p class="text-muted">{{lorem()}}<br> {{lorem()}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <a href="#" target="_blank" class="btn-link mr-3">
                Register now
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
                    name: 'your digital title',
                    data: `<h2>${this.lorem()}</h2>`,
                    page: 'services'
                },
                {
                    id: 2,
                    name: 'your digital content',
                    data: `<p class="mb-5 text-muted">${this.lorem()}</p><p class="text-muted">${this.lorem()}</p><p class ="text-muted">${this.lorem()}</p>`,
                    page: 'services'
                },
                {
                    id: 3,
                    name: 'benefits title',
                    data: `<h2 class="my-5">${this.lorem()}</h2>`,
                    page: 'services'
                },
                {
                    id: 4,
                    name: 'multi-currency accounts',
                    data: `<h4>${this.lorem()}</h4><p class="mt-4 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services'
                },
                {
                    id: 5,
                    name: 'iban',
                    data: `<h4>${this.lorem()}</h4><p class="mt-3 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services'
                },
                {
                    id: 6,
                    name: 'international transfers',
                    data: `<h4>${this.lorem()}</h4><p class="mt-3 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services'
                },
                {
                    id: 7,
                    name: 'fx services',
                    data: `<h4>${this.lorem()}</h4><p class="mt-3 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services'
                },
                {
                    id: 8,
                    name: 'sepa payments',
                    data: `<h4>${this.lorem()}</h4><p class="mt-3 mb-5 text-muted">${this.lorem()}</p>`,
                    page: 'services'
                },
                {
                    id: 9,
                    name: 'bottom paragraph',
                    data: `<p class="pb-4 text-muted">${this.lorem()}</p>`,
                    page: 'services'
                },
                {
                    id: 10,
                    name: 'multi-currency title',
                    data: `<h2 class="text-center my-5">${this.lorem()}</h2>`,
                    page: 'services'
                },
                {
                    id: 11,
                    name: 'how title',
                    data: `<h2 class="my-5 text-center">${this.lorem()}</h2>`,
                    page: 'services'
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
        },
    }
}

</script>


<style scoped>
.line {
    border: 1px solid #ddd;
    width: 100%;
}

.timeline-container {
    margin-top: -8px;
}

.dot {
    background-color: #d83135;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin: 0 auto;
}

.timeline-item {
    list-style: none;
    width: 30%;
}


h4 {
    margin-top: 30px;
}

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


@media only screen and (max-width: 992px) {

    .line{
       display:none;
   }

    .timeline {
        flex-direction: column;
    }

    .timeline-item {
        margin: 0 auto 60px;
        border-top: 1px solid #ddd;
        width: 80%;
    }

    .dot {
        top: -8px;
        position:relative;
    }
}
</style>






