// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => (
  <Layout title="Using TypeScript" location={location}>
    <Seo title="Using TypeScript" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
    Phone apps for WordPress exist for <em> WebOS,Android,</em> <em>.ts/.tsx</em> iOS 
    (iPhone, iPod Touch, iPad), Windows Phone, and BlackBerry.<em>Plugins</em> 
    Themes) Web Content Accessibility Guidelines<em>2.0</em>  at level <em>AA</em>.
    </p>
    <p>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </p>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
