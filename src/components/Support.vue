<template>
    <div class="support-container container-fluid">
        <div class="support-bg mb-5" :style="{'background-image':'url(/images/support.jpg)'}">
            <div class="bg-overlay">
                <h1 class="s-heading text-center">Support</h1>
            </div>
        </div>
        <div class="row ml-0 mr-0">
            <div class="col-10 mx-auto mb-5">
                <div class="support-sections d-flex justify-content-evenly text-center">
                    <div class="faq-container">
                        <h2 class="mb-4">FAQ</h2>
                        <div class="d-flex flex-column" v-for="faq in faqs" v-bind:key="faq.title">
                            <button type="button" class="btn btn-light my-2 text-muted" data-toggle="modal"
                                    data-target="#faqModal"
                                    @click="fillModal(faq)">
                                {{faq.title}}
                            </button>
                        </div>
                    </div>
                    <div class="issue-container">
                        <h2 class="mb-4">Select an issue</h2>
                        <div class="d-flex flex-column">
                            <button type="button" class="btn btn-light my-2 text-muted" data-toggle="modal"
                                    data-target="#exampleModal" @click="issue.type='IDENTIFICATION'">
                                I have a technical issue
                            </button>
                            <button type="button" class="btn btn-light my-2 text-muted" data-toggle="modal"
                                    data-target="#exampleModal" @click="issue.type='NAME'">
                                I have a technical issue
                            </button>
                            <button type="button" class="btn btn-light my-2 text-muted" data-toggle="modal"
                                    data-target="#exampleModal" @click="issue.type='EMAIL'">
                                I have a technical issue
                            </button>
                            <button type="button" class="btn btn-light my-2 text-muted" data-toggle="modal"
                                    data-target="#exampleModal" @click="issue.type='MOBILE'">
                                I have a technical issue
                            </button>
                            <button type="button" class="btn btn-light my-2 text-muted" data-toggle="modal"
                                    data-target="#exampleModal" @click="issue.type='TECH'">
                                I have a technical issue
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="faqModal" tabindex="-1" aria-labelledby="faqModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="faqModalLabel">{{modalContent.title}}</h5>
                                <button type="button" class="btn-close" data-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-muted">
                                {{modalContent.content}}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="modalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel">{{getBtnTitle()}}</h5>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"
                                        @click="clearInputs"></button>
                            </div>
                            <div class="modal-body text-muted">
                                <p>Please provide your contact details:</p>
                                <p v-if="issue.type==='IDENTIFICATION'|| issue.type ==='NAME'">
                                    After submitting your ticket you will be redirected to identification website to
                                    confirm your identity.
                                </p>
                                <form class="mt-3">
                                    <div class="form-group" v-if="issue.type !=='MOBILE'">
                                        <label for="formGroupInput">First name</label>
                                        <input type="text" class="form-control" id="formGroupInput"
                                               v-model="issue.name">
                                    </div>
                                    <div class="form-group" v-if="issue.type !=='MOBILE'">
                                        <label for="formGroupInput2">Last name</label>
                                        <input type="text" class="form-control" id="formGroupInput2"
                                               v-model="issue.surname">
                                    </div>
                                    <div class="form-group" v-if="issue.type==='EMAIL' || issue.type==='TECH'">
                                        <label for="formGroupInput3">Email address</label>
                                        <input type="text" class="form-control" id="formGroupInput3"
                                               v-model="issue.email">
                                    </div>
                                    <div class="form-group" v-if="issue.type==='MOBILE' || issue.type==='TECH'">
                                        <label for="formGroupInput4">Phone number</label>
                                        <input type="text" class="form-control" id="formGroupInput4"
                                               v-model="issue.mobile">
                                    </div>
                                    <div class="form-group" v-if="issue.type==='TECH'">
                                        <label for="formGroupInput5">Please describe your issue:</label>
                                        <textarea type="text" rows="3" class="form-control" id="formGroupInput5"
                                                  v-model="issue.issue"/>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" @click="submitTicket"
                                        :disabled="isButtonDisabled">Submit
                                </button>
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
                modalContent: {
                    title: null,
                    content: null
                },
                issue: {
                    type: null,
                    name: null,
                    surname: null,
                    email: null,
                    mobile: null,
                    issue: null
                },
                issueTittles: {
                    IDENTIFICATIONBtn: 'I have a technical issue',
                    nameBtn: 'I have a technical issue',
                    emailBtn: 'I have a technical issue',
                    mobileBtn: 'I have a technical issue',
                    techCtn: 'I have a technical issue'
                },

                faqs: [
                    {
                        title: 'How to lorem ipsum?',
                        content: 'Modal body text goes here.'
                    },
                    {
                        title: 'How to lorem ipsum?',
                        content: 'Modal body text goes here.'
                    },
                    {
                        title: 'How to lorem ipsum?',
                        content: 'Modal body text goes here.'
                    },
                    {
                        title: 'How to lorem ipsum?',
                        content: 'Modal body text goes here.'
                    },
                    {
                        title: 'How to lorem ipsum?',
                        content: 'Modal body text goes here.'
                    }
                ]
            }
        },
        methods: {
            fillModal(faq) {
                this.modalContent = faq;
            },
            clearInputs() {
                this.issue = {
                    type: null,
                    name: null,
                    surname: null,
                    email: null,
                    mobile: null,
                    issue: null,
                }
            },
            submitTicket() {

            },
            getBtnTitle() {
                switch (this.issue.type) {
                    case 'IDENTIFICATION':
                        return this.issueTittles.IDENTIFICATIONBtn
                    case 'NAME':
                        return this.issueTittles.nameBtn
                    case 'EMAIL':
                        return this.issueTittles.emailBtn
                    case 'MOBILE':
                        return this.issueTittles.mobileBtn
                    case 'TECH':
                        return this.issueTittles.techCtn
                }
            }
        },
        computed: {
            isButtonDisabled() {
                switch (this.issue.type) {
                    case 'IDENTIFICATION':
                        return !this.issue.name || !this.issue.surname
                    case 'NAME':
                        return !this.issue.name || !this.issue.surname
                    case 'EMAIL':
                        return !this.issue.name || !this.issue.surname || !this.issue.email
                    case 'MOBILE':
                        return !this.issue.mobile
                    case 'TECH':
                        return !this.issue.name || !this.issue.surname || !this.issue.email || !this.issue.mobile || !this.issue.issue
                }
                return !this.issue.name || !this.issue.surname || !this.issue.email || !this.issue.mobile || !this.issue.issue
            }
        }
    }
</script>
