<template>
    <div class="privacy-policy-container">
        <div class="container">
            <div class="row">
                <div class="col-10 mx-auto">
                    <div class="privacy-policy-heading text-center">
                        <h1>Privacy Policy</h1>
                    </div>
                    <div class="text-center mb-5">
                        <a href="#" :class="{'shadow': showShadow}"
                           @mouseleave="showShadow = false"
                           @mouseover="showShadow = true"
                           class="btn-get">Download Document</a>
                    </div>
                    <h4>Vivamus molestie posuere mauris non venenatis</h4>
                    <p>Lorem ipsum dolor sit amet, te usu quando labores nominati. Dicat atomorum ei his, no mel inani constituam,
                        id mel minim quodsi. Elit accumsan complectitur ea vis, est ex tritani complectitur. Qui at melius
                        sententiae neglegentur, suavitate voluptatum duo ut.</p>
                    <div class="d-flex flex-column">
                        <span>Donec a tempus ipsum:</span>
                        <span>Maecenas quis risus turpis</span>
                        <span>Nunc finibus molestie placerat</span>
                        <span>Phone: <a href="#" class="url-link">your phone</a></span>
                    </div>
                    <div class="d-flex flex-column my-4">
                        <span>Donec a tempus ipsum: </span>
                        <span>Nunc finibus molestie placerat</span>
                        <span>E-mail: <a class="url-link" href="#">your email</a></span>
                    </div>
                    <p> Sed eget enim nec risus mollis efficitur sit amet eget sem. Quisque bibendum lectus in nibh tincidunt aliquet.
                          Nulla cursus non mi nec maximus. Proin vitae ultricies quam, vel posuere purus. Morbi consectetur
                          vel justo vel gravida.</p>
                    <p>Ut at bibendum leo. Aenean et dolor felis. Nam magna quam, dapibus eu facilisis laoreet, rhoncus sit amet libero.</p>
                    <p>Proin massa sapien, pellentesque ac dignissim ac, tincidunt et odio. Integer ut leo faucibus, malesuada
                        elit nec, vehicula augue. In condimentum nec sem a mollis. Pellentesque malesuada egestas imperdiet.</p>
                    <p>Maecenas quis risus turpis. Nam felis mi, sagittis non sagittis eu, maximus eget justo. Nulla facilisi.
                        Sed pellentesque tincidunt maximus. Suspendisse ac porttitor metus, quis maximus elit. Duis dictum,
                        ante in suscipit maximus, orci lectus malesuada ligula, id congue purus mauris ac odio. Fusce pellentesque,
                        metus vitae laoreet tristique, mauris velit efficitur purus, quis consectetur justo odio id purus.
                        Pellentesque auctor sapien vel nunc tempor venenatis.</p>
                    <p>Nunc mauris enim, fermentum eu augue vel, accumsan convallis nulla. Maecenas et dolor rutrum, auctor orci a, porta est.</p>
                    <h4>HNunc finibus molestie placerat</h4>
                    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sed luctus sem,
                        a rhoncus ex. Curabitur pellentesque, lectus ut tempus fermentum, dui dui blandit ex, in malesuada
                        dui magna ac lectus. In hac habitasse platea dictumst.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Nunc commodo dui sollicitudin est condimentum ultrices.</li>
                        <li>Praesent finibus enim quis dapibus molestie.</li>
                    </ul>
                    <p>Duis auctor est est, vitae sollicitudin sem fermentum vel.</p>
                    <ul>
                        <li>Duis eu purus tincidunt tortor molestie vestibulum.</li>
                        <li>Vestibulum tincidunt orci vitae tempor cursus.</li>
                        <li>Proin non nisl vel magna congue posuere in ac ex.</li>
                        <li>Nam lacinia sem sed risus consectetur tincidunt.</li>
                    </ul>
                    <p>Aliquam blandit dolor sapien, vitae tincidunt dui porta vitae.</p>
                    <table class="table table-bordered text-muted my-4">
                        <tbody class="font-italic">
                        <tr>
                            <td>Aenean interdum purus vitae metus aliquam, vitae pharetra urna pharetra.</td>
                        </tr>
                        <tr>
                            <td>In et ex sollicitudin diam ultrices volutpat vel imperdiet velit.</td>
                        </tr>
                        <tr>
                            <td>Nulla sit amet sem volutpat, consectetur odio et, gravida enim.</td>
                        </tr>
                        </tbody>
                    </table>
                    <h4>Nulla pharetra gravida massa in malesuada</h4>
                    <p>Vivamus sollicitudin, mauris vel congue ultricies, enim felis imperdiet massa, et vestibulum orci
                        ipsum vel libero. Pellentesque sit amet libero condimentum, posuere lorem a, egestas diam.
                        Suspendisse ac consequat mi, sit amet consectetur urna. Nullam non vulputate diam. Nullam tempor</p>
                    <p>Nunc sit amet tortor efficitur, hendrerit leo ac, lobortis elit. Maecenas congue at orci sed elementum.
                        Aenean in vulputate turpis, et faucibus neque. Fusce sit amet urna at ipsum sodales imperdiet.
                        Sed interdum sapien lacus, a consequat lectus lacinia quis. Nulla venenatis dui arcu, eu suscipit
                        nulla ullamcorper ut. Curabitur enim urna, ornare ac libero non, ornare convallis justo. Aenean
                        nec mi lorem. Donec a iaculis est.</p>
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
    .privacy-policy-container {
        padding-top: 115px;
        padding-bottom: 70px;
    }

    .privacy-policy-heading {
        margin-bottom: 40px;
    }

    .privacy-policy-heading::before {
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

    p {
        margin-bottom: 30px;
    }

    h4 {
        margin-top: 40px;
        margin-bottom: 20px;
        text-transform: uppercase;
    }

    li {
        margin-bottom: 10px;
    }

    ul {
        margin-bottom: 30px;
    }
</style>
