/* # FAVICON GIMMICK
 *
 * Creates a link containing a favicon (through Google S2 API).
 *
 * ## Usage
 *
 *     [gimmick:favicon](https://github.com/)
 *
 *     [gimmick:favicon (caption: 'Github') ](https://github.com/)
 *
 * ## Options
 *
 *  * **width**:    Image width.
 *  * **height**:   Image height.
 *  * **alt**:      Alternative favicon.
 *  * **domain**:   Favicon domain.
 *  * **caption**:  Link caption.
 *  * **target**:   Link target.
 *  * **cssClass**: Link CSS class.
 *
 * ## Author
 *
 * Copyright 2015 Guillermo Calvo
 *
 * <https://github.com/guillermocalvo/>
 *
 * ## License
 *
 * Licensed under the [GNU Lesser General Public License][LGPL].
 *
 * [LGPL]: http://www.gnu.org/copyleft/lesser.html
 */
(function($){
    'use strict';
    function favicon($link, opt, text){
        var default_options = {
            width:    16,   /* image width          */
            height:   16,   /* image height         */
            alt:      '',   /* alternative favicon  */
            domain:   '',   /* favicon domain       */
            caption:  text, /* link caption         */
            target:   '',   /* link target          */
            cssClass: ''    /* link css class       */
        };
        var options = $.extend ({}, default_options, opt);
        return $link.each( function(i,e){
            var htmlImage = '<img src="https://www.google.com/s2/favicons?' + (options.domain ? 'domain=' + options.domain : 'domain_url=' + e) + (options.alt ? '&alt=' + options.alt : '') + '" width="' + options.width + '"' + ' height="' + options.height + '"' + ' alt="favicon"' + '>';
            var htmlLink = '<a href="' + e + '"' + (options.target ? ' target="' + options.target + '"' : '') + (options.cssClass ? ' class="' + options.cssClass + '"' : '') + '>' + htmlImage + (options.caption ? ' ' + options.caption : '') + '</a>';
            $(e).replaceWith(htmlLink);
        });
    }
    var faviconGimmick = {
        name: 'favicon',
        version: $.md.version,
        once: function(){
            $.md.linkGimmick(this, 'favicon', favicon);
            $.md.registerScript(this, '', {
                license: 'LGPL',
                loadstage: 'postgimmick',
                finishstage: 'all_ready'
            });
        }
    };
    $.md.registerGimmick(faviconGimmick);

}(jQuery));
