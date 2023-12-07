import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'About Us', href: '#' },
    { name: 'What we do', href: '#' },
    { name: 'Why choose us', href: '#' },
    { name: 'Testimonial', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth={'xl'}
      shouldHideOnScroll={true}
      classNames="justify-center"
    >
      <NavbarContent data-justify={''}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Image src="/images/logo.png" height={56} width={162} alt="Future Humans Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-[60px] ml-[60px]">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.href} className="text-[16px] text-dark">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="gap-[60px] bl-1">
        <NavbarItem className="hidden lg:flex ">
          <Link className="text-secondary text-[16px]" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-primary text-[16px]" href="#">
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-dark" href={item.href}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
