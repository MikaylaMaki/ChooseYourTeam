/**
 * Created by Huulktya on 6/22/14.
 */


/**
 * Problem description:
 * Make an application that moves through a tree based on user response.
 * Parameters:
 *  The tree is a rooted, acyclic, digraph where every path is a two way path.
 *  Each branch has some text associated with it (text is arbitrary)
 *  Each leaf node either points to a picture and/or some text
 *  Each node that is not a leaf has some text in it
 *
 * Features:
 *  UI is dynamic and has the text boxes coming in from the right and leaving from the left when an option is chosen
 *  The history is managed by the app (in order to enable dynamic page changes when moving through history)
 *  Website is accessible for the visually impaired
 *  Has counters on every node showing how many times users have reached that node
 *  Mobile version of site (detected automatically)
 *
 *  UI Mockup:
 *  Soft blue background with pale world cup logo.
 *  Large central box with current node's content.
 *  branches shown below current node's content in
 *  2 columns All content changes size dynamically
 *  to support an arbitrary number of two-column
 *  rows all with equal size (if there is an odd
 *  number of  branches, have the last row use a
 *  single column, same size button, that is centered).
 *
 *  Possible progress steps:
 *  Make javascript with plain old HTML, no stylesheets or fancy template (use JQuery, of course)
 *    Wrap up all output to enable easy use of templates later
 *  Use sample data to design UI (make it accessible at this point, do not design mobile site)
 *  Hook UI and javascript together
 *  Work on additional features (mobile version, history management, transitions)
 */