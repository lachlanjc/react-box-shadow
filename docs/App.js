const React = require('react')
const BoxShadow = require('react-box-shadow')
const { Box, Text } = require('axs')
const { Flex, Heading } = require('axs-ui')

const Sample = props => (
  <BoxShadow
    is={Box}
    css={{ width: 16 * 8, height: 16 * 8, ...props.css }}
    m2
    {...props}
  />
)

const Link = props => (
  <Text
    is="a"
    css={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}
    m2
    {...props}
  />
)

const blue = '#067df7'
const container = { mx: 'auto', css: { maxWidth: 48 * 16 } }

const App = () => (
  <main>
    <Box is="header" white bg={blue}>
      <Box px3 py4 {...container}>
        <Heading level={1} fontSize={[2, 1]} m0>{'<BoxShadow />'}</Heading>
        <Text>React component for CSS box-shadow</Text>
        <Flex flexWrap="wrap" mx-2 mb2>
          <Link href="https://github.com/lachlanjc/react-box-shadow">
            GitHub
          </Link>
          <Link href="http://npmjs.com/package/react-box-shadow">
            npm
          </Link>
          <Link href="https://lachlanjc.me">
            @lachlanjc
          </Link>
        </Flex>
        <Pre py1 display="inline-block">npm i react-box-shadow</Pre>
      </Box>
    </Box>
    <Flex flexWrap="wrap" px2 {...container} py3>
      <Box width={[1, 1 / 2]}>
        <Heading level={2} fontSize={4} caps my1 ml2>Demo</Heading>
        <Flex flexWrap="wrap">
          <Sample />
          <Sample offsetY={8} blurRadius={16} />
          <Sample inset blurRadius={16} />
          <Sample spreadRadius={4} blurRadius={16} color={blue} />
        </Flex>
      </Box>
      <Box px2 width={[1, 1 / 2]}>
        <Heading level={2} fontSize={4} caps my1>Usage</Heading>
        <Pre children={usage} />
      </Box>
    </Flex>
    <Box is="footer" p3 />
  </main>
)

const Pre = props => (
  <Box
    is="pre"
    p2
    rounded
    fontSize={6}
    bgGray1
    gray9
    css={{
      fontFamily: 'SFMono-Regular, Menlo, monospace',
      lineHeight: 1.5,
      overflow: 'auto'
    }}
    {...props}
  />
)

const usage = `// all options (defaults)
<BoxShadow
  inset={false}
  offsetX={0}
  offsetY={0}
  blurRadius={4}
  spreadRadius={0}
  color='rgba(0,0,0,.5)'
/>

// customize props individually
<BoxShadow
  offsetY={8}
  blurRadius={16}
/>
<BoxShadow
  inset
  blurRadius={16}
/>
<BoxShadow
  spreadRadius={4}
  blurRadius={16}
  color='${blue}'
/>
`

module.exports = App
