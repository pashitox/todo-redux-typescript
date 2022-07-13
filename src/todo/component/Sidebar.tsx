import React from "react"
import {Link} from "react-router-dom"

import {navigationItems} from "../component/configRoute/navigation"

const Sidebar = () => {

	return (
		<div className="sidebar">
			<div className="sidebar__items">
				{ (
					<>
						{navigationItems.sidebar.map((item) => (
							<Link
								key={item.text}
								to={item.to}>
								{item.name}
							</Link>
						))}
					
					</>
				)}
				
				
			</div>
		</div>
	)
}

export default Sidebar



//<Flex
//      flexDirection="row"
//      justifyContent="space-between"
//      alignItems="center"
//      width="100%"
//      as="nav"
//      p={4}
//      mx="auto"
//      maxWidth="1150px"
//    >
//      <Box>
//        <Link to="/TodoForm">
//          <Button
//            fontWeight={['medium', 'medium', 'medium']}
//            fontSize={['xs', 'sm', 'lg', 'xl']}
//            variant="ghost"
//            _hover={{ bg: 'rgba(0,0,0,.2)' }}
//            padding="1"
//            color="white"
//            letterSpacing="0.65px"
//          >
//            <Text fontSize={['xl', '2xl', '2xl', '2xl']} mr={2}>
//              🦉
//            </Text>            
//            React Redux Typescritp jast Emzyne 
//          </Button>
//        </Link>
//      </Box>
//
//      <Box>
//        <Link to="/TodoList">
//          <Button
//            fontWeight={['medium', 'medium', 'medium']}
//            fontSize={['xs', 'sm', 'lg', 'xl']}
//            variant="ghost"
//            _hover={{ bg: 'rgba(0,0,0,.2)' }}
//            p={[1, 4]}
//            color="white"
//          >
//            List Todo
//          </Button>
//        </Link>
//        <Link to="/">
//          <Button
//            fontWeight={['medium', 'medium', 'medium']}
//            fontSize={['xs', 'sm', 'lg', 'xl']}
//            variant="ghost"
//            _hover={{ bg: 'rgba(0,0,0,.2)' }}
//            p={[1, 4]}
//            color="white"
//          >
//            Add Todo
//          </Button>
//        </Link>
//      </Box>
//    </Flex>