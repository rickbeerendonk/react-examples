using System.Web;
using System.Web.Optimization;
using System.Web.Optimization.React;

namespace ServerSideBundlingAndMinification
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new BabelBundle("~/bundles/main").Include(
                // Add your JSX files here
                "~/Scripts/HelloReact.jsx"
                // You can include regular JavaScript files in the bundle too
            ));

            // Forces files to be combined and minified in debug mode
            // Only used here to demonstrate how combination/minification works
            // Normally you would use unminified versions in debug mode.
            BundleTable.EnableOptimizations = true;
        }
    }
}