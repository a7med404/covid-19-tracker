/* -----------------------
 * Fixed Header
 * --------------------- */

$(document).ready(function() {
    var $header = $('#header--standard')

    if ($header.length) {
        $header.headroom({
            offset: 100,
            tolerance: 5,
            classes: {
                initial: 'animated',
                pinned: 'slideDown',
                unpinned: 'slideUp'
            }
        })
    }
})

//Global var to avoid any conflicts
var CRUMINA = {}

;
(function($) {
        // USE STRICT
        'use strict'

        /* -----------------------------
         * Scrollmagic scenes animation
         * ---------------------------*/

        CRUMINA.CallToActionAnimation = function() {
            var controller = new ScrollMagic.Controller()

            new ScrollMagic.Scene({ triggerElement: '.call-to-action-animation' })
                .setVelocity('.first-img', { opacity: 1, bottom: '0', scale: '1' }, 1200)
                .triggerHook(1)
                .addTo(controller)

            new ScrollMagic.Scene({ triggerElement: '.call-to-action-animation' })
                .setVelocity(
                    '.second-img', { opacity: 1, bottom: '50%', right: '40%' },
                    1500
                )
                .triggerHook(1)
                .addTo(controller)
        }

        $(document).ready(function() {
            CRUMINA.Bootstrap()
        })