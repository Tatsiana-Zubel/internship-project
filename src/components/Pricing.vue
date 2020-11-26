<template>
    <div class="container-fluid pricing-container">
        <div class="row ml-0 mr-0">
            <div class="col-md-9 col-11 mx-auto">
                <h1 class="heading text-center">Pricing list</h1>
                <div class="row mb-4 pl-3 pr-3">
                    <button
                        :class="{'active-btn': showTable === 'PERSONAL', 'not-active-btn': showTable !== 'PERSONAL'}"
                        @click="showTable = 'PERSONAL'" class="btn btn-lg rounded-0 col-6" type="button">
                        Some pricing one
                    </button>
                    <button
                        :class="{'active-btn': showTable === 'BUSINESS', 'not-active-btn': showTable !== 'BUSINESS'}"
                        @click="showTable = 'BUSINESS'" class="btn btn-lg rounded-0 col-6" type="button">
                        Some pricing two
                    </button>
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered text-muted">
                        <thead>
                        <tr class="service-type-heading text-center">
                            <th scope="col"></th>
                            <th class="eea-res" scope="col">Some pricing one</th>
                            <th class="noneea-res" scope="col">Some pricing two</th>
                            <th class="compl-intensive" scope="col" v-if="showTable === 'BUSINESS'">Compliance
                                Intensive
                            </th>
                        </tr>
                        </thead>
                        <tbody v-for="(values,serviceName) in tableData" v-bind:key="serviceName">
                        <tr class="service-type-heading">
                            <td class="text-uppercase" v-if="showTable === 'BUSINESS'" colspan="4">{{ serviceName }}</td>
                            <td class="text-uppercase" v-if="showTable === 'PERSONAL'" colspan="3">{{ serviceName }}</td>
                        </tr>
                        <tr v-for="value in values" v-bind:key="value.id">
                            <td scope="row">Some Service</td>
                            <td class="text-center">{{ value.eeaPrice }}</td>
                            <td class="text-center">{{ value.nonEeaPrice }}</td>
                            <td class="text-center" v-if="showTable === 'BUSINESS'">{{ value.compliancePrice }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-center mt-4">
                    <a v-if="showTable === 'BUSINESS'" href="#" :class="{'shadow': showShadow}"
                       @mouseleave="showShadow = false"
                       @mouseover="showShadow = true"
                       class="btn-get my-4">
                        Download price list for Some pricing one
                    </a>
                    <a v-if="showTable === 'PERSONAL'" href="#" :class="{'shadow': showShadow}"
                       @mouseleave="showShadow = false"
                       @mouseover="showShadow = true"
                       class="btn-get my-4">
                        Download price list for Some pricing two
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            businessData: null,
            personalData: null,
            showShadow: false,
            showTable: 'BUSINESS',
            apiData: {
              "BUSINESS": [
                  {
                    "id":1,
                    "title":"Test",
                    "serviceType":"test",
                    "eeaPrice":"100",
                    "nonEeaPrice":"100",
                    "compliancePrice":"100",
                    "position":1,
                    "accountType":"BUSINESS",
                    "datestamp":null
                  },
                {
                  "id":2,
                  "title":"Test",
                  "serviceType":"test",
                  "eeaPrice":"100",
                  "nonEeaPrice":"100",
                  "compliancePrice":"100",
                  "position":1,
                  "accountType":"BUSINESS",
                  "datestamp":null
                },
                {
                  "id":3,
                  "title":"Test",
                  "serviceType":"test",
                  "eeaPrice":"100",
                  "nonEeaPrice":"100",
                  "compliancePrice":"100",
                  "position":1,
                  "accountType":"BUSINESS",
                  "datestamp":null
                }
              ],
              "PERSONAL": [
                {
                  "id":1,
                  "title":"Test",
                  "serviceType":"test",
                  "eeaPrice":"100",
                  "nonEeaPrice":"100",
                  "compliancePrice":"100",
                  "position":1,
                  "accountType":"BUSINESS",
                  "datestamp":null
                },
                {
                  "id":2,
                  "title":"Test",
                  "serviceType":"test",
                  "eeaPrice":"100",
                  "nonEeaPrice":"100",
                  "compliancePrice":"100",
                  "position":1,
                  "accountType":"BUSINESS",
                  "datestamp":null
                },
                {
                  "id":3,
                  "title":"Test",
                  "serviceType":"test",
                  "eeaPrice":"100",
                  "nonEeaPrice":"100",
                  "compliancePrice":"100",
                  "position":1,
                  "accountType":"BUSINESS",
                  "datestamp":null
                }
              ]
            }
        }
    },
    computed: {
        tableData() {
            if (this.showTable === 'PERSONAL' && this.apiData) {
                return this._.groupBy(this.apiData.PERSONAL, "serviceType")
            }

            if (this.showTable === 'BUSINESS' && this.apiData) {
                return this._.groupBy(this.apiData.BUSINESS, "serviceType")
            }
            return [];
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>
