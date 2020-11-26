<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container mx-auto mt-1 mb-1 d-flex">
            <a class="navbar-brand" href="/">
                <img src="/images/brand.svg" style="max-height: 2em" alt="COMPANY NAME">
            </a>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav text-center">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about" :class="{'active-page': $route.path === '/about'}">
                            About us
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/services"
                                     :class="{'active-page': $route.path === '/services'}">Services
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/pricing"
                                     :class="{'active-page': $route.path === '/pricing'}">Pricing
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/support"
                                     :class="{'active-page': $route.path === '/support'}">Support
                        </router-link>
                    </li>
                    <li data-toggle="navbar-tooltip" data-placement="bottom" title="Open Account">
                        <a href="#" target="_blank" class="nav-btn mr-3">
                            <span class="link-text">Open account</span>
                            <i class="fas fa-user link-icon" size="1x"></i>
                        </a>
                    </li>
                    <li data-toggle="navbar-tooltip" data-placement="bottom" title="Online Banking">
                        <a href="#" target="_blank" class="nav-btn mr-3">
                            <span class="link-text">Online Banking</span>
                            <i class="fas fa-wallet link-icon" size="1x"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="burger">
                <button class="navbar-toggler rounded-0 burger-btn" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation" @mouseleave="showColor = false" @mouseover="showColor = true"
                        :class="{'active-burger': showColor, 'notactive-burger': !showColor}">
                    <span>
                        <i class="fas fa-bars burger-icon" size="1x"></i>
                    </span>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            showColor: false,
        }
    }
}
</script>

