# GatsbyJS Starter

Web template is an opionated GatsbyJS Starter kit built for Netlify.

See https://starter.bodhiproject.org/ for more information.

## Get these files

```
cd to/your/directory
git clone https://github.com/bodhi-project/gatsbyjs-starter
setopt -s dotglob nullglob
mv -vn gatsbyjs-starter/* .
rm -rf gatsbyjs-starter
npm install
npm start
```

For Bash, use `shopt`

For Zsh, use `setopt`

## Semver Versioning

Remember to update the version in `package.json` before publishing:

```
npm version patch --no-git-tag-version // Add a patch. Ex, goes from 0.0.1 to 0.0.2
npm version minor --no-git-tag-version // Add a minor package version. Ex, goes from 0.0.1 to 0.1.1
npm version major --no-git-tag-version // Add a major package version. Ex, goes from 0.0.1 to 1.0.1
```

## To upgrade package dependencies run --

```
npm-upgrade
npm install --save
```

See https://www.npmjs.com/package/npm-upgrade for more info.

## To check unused dependecies run --

```
depcheck --ignore-dirs=content,data,node_modules,public,static
```

See https://github.com/depcheck/depcheck for more info.

<Img
  fluid={this.props.data.tuskyBanner.childImageSharp.fluid}
/>
<Img fluid={this.props.data.feature1.childImageSharp.fluid} />

<Carousel>
  <div className="feature">
    
  </div>
  <div className="feature">
    
    <Tooltip
      title={
        <p style={{ marginBottom: 0 }}>
          <strong>Chassis</strong>, built out of laser-cut acrylic
          or aluminium, and includes multiple 3D printed components.
        </p>
      }
    >
      <span className="tip tip1">&nbsp;</span>
    </Tooltip>
    <Tooltip
      title={
        <p>
          <strong>Breath delivery</strong>, the ventilator delivers
          breaths by compressing a conventional bag-valve mask with
          a pivoting cam arm. Tidal volume is 300ml to 500ml. Next
          iteration will allow 300ml to 800ml.
        </p>
      }
    >
      <span className="tip tip2">&nbsp;</span>
    </Tooltip>
    <Tooltip
      title={
        <p>
          <strong>Compression mechanism</strong>, log-shape CAM that
          goes up-and-down. Next iteration will implement a CAM
          design to implement proper breathing rhythm with
          inspiration:expiration ratio of 1:2.
        </p>
      }
    >
      <span className="tip tip3">&nbsp;</span>
    </Tooltip>
  </div>
  <div className="feature">
    <Img fluid={this.props.data.feature3.childImageSharp.fluid} />
    <Tooltip
      title={
        <p>
          <strong>Motor</strong>, a standard Toyota 12V DC
          windshield wiper motor to actuate the CAM.
        </p>
      }
    >
      <span className="tip tip4">&nbsp;</span>
    </Tooltip>
  </div>
  <div className="feature">
    <Img fluid={this.props.data.feature2.childImageSharp.fluid} />
    <Tooltip
      title={
        <p>
          <strong>RPM monitor</strong>, a free android and ios app
          that reports the RPM with ±0.1 error. Can permanently
          include a cheap mobile with the device, or bring a mobile
          close each time the device needs adjustment.
        </p>
      }
    >
      <span className="tip tip5">&nbsp;</span>
    </Tooltip>
  </div>
</Carousel>

<p>
  We began our efforts by exploring many<supr>*</supr>{' '}
  open-source projects (we started with the Spanish{' '}
  <Link to="https://www.oxygen.protofy.xyz/">OXYGen</Link>{' '}
  design), and what we discovered was that there was a lack of
  clear and transparent information on what stage a project or
  a prototype was in. As we set out to document the efforts of
  our team <i>over time</i> we wanted to express clearly and
  transparently the status of our prototypes. We discovered
  the algorithm from{' '}
  <Link to="https://www.pubinv.org/">Public Invention</Link>
  &nbsp;(shown below) to be a good means to quickly inform
  others of our progress, and this is what we have adopted at
  the moment to report the status of the ventilator
  prototypes.
</p>
<div
  className="margin-p"
  style={{ paddingTop: '7px', paddingBottom: '7px' }}
>
  <div style={{ maxWidth: '45rem' }} className="feature">
    <Img
      fluid={this.props.data.process.childImageSharp.fluid}
    />
  </div>
</div>
<p>
  <supr>*</supr> At the time of writing this note (last week
  of May, 2020) there are atleast a hundred and sixteen
  ventilator designs that teams around the world are working
  on. This information is tracked and managed by a community
  which is led by the{' '}
  <Link to="https://www.pubinv.org/">Public Invention</Link>{' '}
  group, and{' '}
  <Link to="https://docs.google.com/spreadsheets/d/1inYw5H4RiL0AC_J9vPWzJxXCdlkMLPBRdPgEVKF8DZw/edit#gid=0">
    can be found here
  </Link>
  .
</p>
