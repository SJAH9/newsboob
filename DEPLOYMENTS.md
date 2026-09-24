# Public NewsBoob deployments

The standalone release is at https://sjah9.github.io/newsboob/ and is built from
`newsboob.html`, `player.js`, and `hls.min.js` by the Pages workflow.

The sidhubbard.com deployment is maintained in that site's repository. It adds
site navigation, an Off button, and the Host Videos channel in place of Free
Speech TV. Its host-stream configuration caps rendition height at 720p and uses
longer live buffers for that stream's delivery conditions.

War Maps keeps its embedded copy in `web/newsmedia-player/` and publishes it in
`outputs/web/newsmedia-player/`. It starts muted for autoplay and defaults to its
embedded AUTO interface. Its surrounding page supplies project and source links.

These are deliberate deployment differences, not interchangeable copies. Apply
shared wording or player fixes to each affected copy, test its own controls, and
retain the host/channel and embedding settings. All current interfaces select
channels through buttons, the drawer, the ticker, or arrow keys; the earlier dial
is not a visible control. Earlier demonstration videos should be labelled as
historical interface recordings rather than instructions for the current player.
