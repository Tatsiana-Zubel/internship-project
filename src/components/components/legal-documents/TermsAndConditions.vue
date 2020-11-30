<template>
    <div class="terms-container">
        <div class="container">
            <div class="row">
                <div class="col-10 mx-auto">
                    <h1 class="terms-heading text-center">Terms and Conditions</h1>
                    <div class="text-center">
                        <a href="#" :class="{'shadow': showShadow}"
                           @mouseleave="showShadow = false"
                           @mouseover="showShadow = true"
                           class="btn-get">Download Document</a>
                    </div>
                    <ol class="mt-5">
                        <li>Ut placerat eros sed quam gravida, id hendrerit diam porta
                            <ol class="internal-list my-4">
                                <li>Pellentesque non nunc in ex dignissim feugiat. Vivamus interdum, massa a gravida suscipit,
                                    ante est euismod libero, sed tempor dolor sem at est. Aliquam blandit ullamcorper aliquam.
                                    Nunc vulputate id odio sed rutrum. Sed sapien ante, efficitur id ligula sed, laoreet scelerisque
                                    neque. Duis sed elementum diam, nec dictum felis. Ut in congue magna, eu facilisis sem.
                                    Vestibulum volutpat mauris vel dapibus rhoncus. Donec dapibus ultricies dolor sit amet lacinia.
                                    Fusce et justo in metus semper egestas. Mauris gravida orci in velit finibus, vitae iaculis urna
                                    malesuada. Aenean vitae laoreet nunc. Cras in nisl ut lacus fringilla fermentum. Nullam eu finibus
                                    urna, non tincidunt velit. Morbi ut accumsan enim.</li>
                                <li>Donec neque risus, vehicula et vulputate eget, sollicitudin vel ante. In dapibus maximus
                                    ex ac accumsan. Sed sagittis tristique dapibus. Phasellus nibh lorem, tincidunt ac dignissim
                                    sit amet, pretium in augue. Morbi consectetur purus in suscipit malesuada. Maecenas blandit
                                    pulvinar condimentum. Fusce egestas vel erat nec finibus. Donec non dolor sit amet nulla
                                    pharetra tristique. Morbi tempor tortor at odio malesuada, non cursus purus iaculis.
                                    Etiam accumsan purus eu lectus pharetra, sit amet cursus erat gravida. Proin eleifend diam
                                    et nulla facilisis volutpat.</li>
                                <li>Morbi vel congue justo, quis pulvinar justo. Nullam at sem in ante porttitor feugiat.
                                    Vivamus nec diam sem. Sed rutrum condimentum turpis sed congue. Suspendisse arcu dolor,
                                    ullamcorper malesuada sodales non, porta nec neque. Phasellus maximus vestibulum blandit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero sem, consectetur
                                    vel sem at, aliquam elementum nisl. Cras vitae fermentum dui. Vestibulum ante ipsum primis
                                    in faucibus orci luctus et ultrices posuere cubilia curae; Duis at lorem eget erat
                                    pretium convallis. Donec bibendum diam vitae euismod tempus.</li>
                            </ol>
                        </li>
                        <li class="mt-5 mb-4">Proin id tempor dui</li>
                        <ol class="internal-list">
                            <li>FQuisque odio felis, ornare non eros ac, porta volutpat sapien. Aenean quis lacus non
                                ligula luctus malesuada. Praesent viverra nibh sollicitudin nulla gravida, quis
                                ornare diam tincidunt. Curabitur molestie ut urna ac mattis. In ex nisi, malesuada a
                                dapibus sed, vulputate in ante.</li>
                            <ol class="internal-list">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum ornare
                                    sapien quis viverra. Aliquam pellentesque elementum ex id congue. Phasellus sit
                                    amet velit consequat, ullamcorper lacus quis, maximus mauris. In hac habitasse platea dictumst.
                                    Aliquam congue leo ex, ut consequat urna cursus id. Etiam in malesuada nisl, ornare porttitor risus.
                                    Praesent molestie interdum metus sed consectetur. Donec a erat odio –
                                    <a class="url-link" href="#">link</a>
                                </li>
                            </ol>
                        </ol>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                showShadow: false
            }
        }
    }
</script>


<style scoped>
    .terms-container {
        padding-top: 115px;
        padding-bottom: 70px;
    }

    .terms-heading {
        margin-bottom: 60px;
    }

    .terms-heading::before {
        content: "";
        display: block;
        width: 35px;
        border-top: 2px solid #d83135;
        margin: 0 auto 2rem;
        text-align: center;
    }

    .btn-get {
        background-color: #d83135;
        color: #ffffff;
        font-size: 16px;
        padding: 14px 40px;
        border-radius: 50px;
        text-decoration: none;
        border: 1px solid #d83135;
        margin: 0 auto;
    }

    ol {
        list-style-type:none;
        counter-reset:list;
    }
    ol li:before {
        counter-increment:list;
        content: counters(list, ".") ". ";
    }

    li {
        margin-bottom: 15px;
    }

    .internal-list {
        margin-left: -32px;
    }
</style>