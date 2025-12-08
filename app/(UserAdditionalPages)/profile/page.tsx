import Userbanner from '@/app/components/Profile Compoenets/Userbanner'
import React from 'react'
import { LuDot } from 'react-icons/lu'
import { MdModeEditOutline } from 'react-icons/md'

const page = () => {
  return (
    <div className='flex flex-col '>
        <Userbanner/>
        <div className="flex">
          <img 
          src="
          data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUTEhAWFRUVFxIVEhUQEBUVEBUWFRUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4vFx8zODMsNygtLisBCgoKDQ0OFQ8QFSsdFR0tLS0rKy0tKy0rLS0rLS0tLS0tLSstLSsrLTcrLSs3LS0rLS0tLTcuLTctKzg3Ky0rN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAABAwEGAwUEBwUGBwAAAAABAAIRAwQFEiExQQZRYRMicYGRMlKhsQcUQmKC0eEjcqLB8DNDU5LS8RUWJDRjssL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHREBAQEBAAIDAQAAAAAAAAAAAAERAiFBEjFhUf/aAAwDAQACEQMRAD8A8uTXFKSka0kgKuU8qjrA+oSWjRZrmwYOy9Pua72taARm7XzXF8XXaaNY5ZOzCjrjDSwhhG4nzhWKdWkNaZP40EDGEmACT0CnFAN9rM+6NB+8f5BOq24kQ0Bg5N19VXaSUFgERybvzcU0knQeQHzKaVZs4Hjuesfy08SiK72ka+KarD3CCdXO1PTeOQ29VXRQmOMpXlK0IBohKhCASpEIBCEFAjmqMGFKm1G7oHShNplOQRuEZqRBCRqBpCcwJzhGRSuZCBqEsIU0apK2OH7HidiOgWKWmQI1XaXRRwUwOa3U5jToiCPJZv0mXZioMqgezr5rQa5a/EVmFSwuB2CjbwhCVwgoaJyCjJWMlSgJ7xHdG2vU7n+XkmIBKHHPrqkQgEITX8kCN5qegyT4Znllz+CjTg4wRzifJA+uRkByk8yTnJ8oTHNj0B9UjjJKHGSgEicXZAcvmT+UJhQKgIKEAhCEEYyKsUWgmD0/Uf1yUDwnsKCRzIMHQ6H8/NRQU+o+Zy1M+uqagcXZR6JsoTMfNBJjCRNxBCDaNrJeDGQ0WseImgQAoq1jABGGFztoYQSEG8eI34suau3/AMWVDRFMHUZrkWvgyoK1QuMlDTCrNjEBz+WTfE7+iqq2cmNHPE4+sD5II0IQgEIQgEkZpSkagVCEIBCEIBCCiECBKhCAQhCAKaxOKEAhCEAo6ikQggQpcCEHuPFvDOr6YXk19WfA7SOa+katMOBBC8X+k67uyfIGRVrVjzx7kxCFGQrBdk3o2PiVXT2oJEICa85IBxTlGNVIgENSBKgEIQgEFBKRASlQhAIQhAIQhAJGlKknOECoQhA3FmnKOonzkgVCbjQg+rCvM/pgs/7IOXpi81+mCtFEN6hardeMITiE1ZYCmDI1TqLIGM/g6nn4BNBQKmVU9MqoGs1UqiYpGoFCENQEBKEm6VAhCVIEqAQUEpNkCoQhAIQShAJj9U9RvQSApHoboh2iBlQpGlCagdBSpsoQfWC8f+mK0y9jOq9devD/AKVKk2kDkCrWq4UtQwgGSJ6THqpAoXKMn1axcZPgANANgEjUxOBzQSTmmVErdfJK8ZII2lWbBZzUe1o3OcCYG5VRdPwlZxD6h54R8CfmPRSkYDwASBoCQPCUiltzIqPH33adSUWjvPdhBzc4gHI6kmR6por7p6jcc1IqAIQhA2oUrtk0ZlXH2M9h2sfbjyjX1yQVkJA5Kga9K0pSogYQSplRPTKmiApp5UdIqRBE1ItG87pfRgk4mncDQ8iNlnFAiEIQfVtQ5LwP6Q6uK1uz0C90vKrhpuPQr544ir9pXqO6n4K1qsohQOVghV3FZZNSygJFQ9uqkKhBUyBtKnIcfdE/xNH810vDHDVstVKpUs1Tv0XMxUyY7j2OcHjPOcMYYzlZt0WfG2sAJJp5DcmZEeYC9h+je6n2eo5+ge0UajfvMax9F/gWvqDzYiyPHr3sNqo1h9aoupOdhPfYWhwEAkbHTZTW5n/VAtg4ocJPdPdIOfWDn1XqH01XVTqtpVAanbNbU7MNaDRc1rmmo1x1D4dIiZwleP2Z3ZmnUJDhJOFrpcACQQ4bTmRzTE/FWvTLSQQQRkQdU5pWlf1mHdqszY8DPqNPhHoVmzCmhU15ShWrrogu7R47jMzkTJGYGXqVRVbTMxGcxG86Qu3/AOHj6v2X3Yn72s+ua5S7KT31A5uGQcRxnuyZjqc8/Jdjdlx2q04oqv7okinTLGzs0OgmTnqR5LNa5cVY6Ac5zHQ0w4AnKHtzgnyIVfEtm+bt+r1WuLSW4u+KkziB7wdOckT8VJf11tAFSm2BHeDR3Y2cI+KupjDUdQKQNOfRBVQym5FQJpCcx2yBrNVbsjMT2Dm5o+IlVi1aFxUy6qI+zLs/T5lSjqbypA0am/cdkc8wCR8VwZXeWx/7GpPuP2iO6VwZU5a6IhLCFpl9H8X2jDQd5rwS3e2V7H9INphgbOq8gtje8Va1VMqo7VX8KoO1WUEJE4hNVKRSsKiSgojRuu2mjVbUjIHveB/qfJfS9k7N7A5sQ9rHZZCMIwkRplGfQL5isVVocMY7ru67wO/kYPkvX/o8v91CLDaSQAYs1V+QIOlFxOjvdnWYGgmVrmu1v9lnqUg20uw4XBzKuEkNcMg6QIbIJaQYBDjHTlr6sFzuovY00GF4INSjTLqkE4jGFs6gRJgQF3RavMfpPqQAxz6VmpxIDWtfba7s8msZ7LOpcPXJNrVk+3m/EVqo9oaVnnsGOPZ4iS49STrGYWSOq0LHc9WqcmFrdsUz5DUp7bH2juyoCWj+0qnQ/pyA1+KRhTsFjfWfhb+I7Acyujvuz9hZmMaIFRxY2fadhgvI55lo/Eu24O4OaGBz+5SHecXZOqQMzOzevpzWQ6zVLyt3aspkUmgMsjCC1opt0qkfZBku8xyEmsyMK6LDWaAyjZ3VqxwlwpgnDjIAxEThHjGhK6G977ve6qVJr6NmpirjLQ3FUqEtw4i8h0T3mjJep3HdTLKwNZnu90QXHn+QUfEtgZXawihRrupuOVWS9jXCHGmWmQ6QzLcDnCTCyyeHgPEd/wBrtDsNoZTa4hs4aeF0EBzS7PWCPJSXN9frVPqlGmHvaHgtIGQYCDicSABlEncgbr1C8Po8FbtT9YY0Vi17mGniqBzG4WNaZlogukQdGq/c/DzbDUtNsNMuq1u7Ro0zLyOTtgXOgk6NDQSdVcjM+Xt4bXs1Wz1nU61KHNjtaeRAa4NMEiY1b4GN1HbLG6nDtWOza7XXYxuvU7y4RrUQ60VCKtSsTUtLmjute7MtAOfZiYB6ZxkuDv8Ac2i00aZyf3i3UNEzlyk7eKmr8XPESoiFKSkeqyfZaT3mGiSAT5DxV+5rYKLi5zThcIDo0g7c/wBFfsVj7Gg9xyqPEAbicmjxkytFpZQpDEYa0AAbuP5ys2tSKt7XgzsCWuBNTujCZ11nwauTV+22g1XFxy90bAclTqNViW6ahEIVR6dxDedSuQXN01wSf4dR8VxVoeC4wutr0A4akHYgw4eBWDeFFzc6jMY/xGCHgfeGhVqsxwyWU7Va9cZEsIeOntDxbqPksgrIdCYnFyYkQJUiFRo3FZhVr0qRj9o4MGIwCXSGidsyM17JwjdjXU+wrOPaUTFIvaG2imweyyTIqsHIjLSCIK8QsheHtNOcYcCzDqHAyCPCF9M3Y6naqVGu5gDy0OyMOY/R7Q4Z5ODhyMKVvho0WENAMZbtGEeQnL1WJe3D1CoS9wLZjEKNNvaPOgxODS92g3XQwmuWXTHlHFVkqN/Yso/V6LwZDSHWqsBEh75JYw6YRrz2W/wlwS2k1prtGURTGYnm87mdlWbV+t29p1aHjDywUpd8Y/iXoISJipeFnD6ZZgDw4YcDvYdOz/ucxuMs5hMuq7G0QY7z3GXvIguPhs0bBXwhXAJr2A6ieU7eHJPAToVxcQhrhpUcBykO+LgT8UNpgGd+ZJJ8JO3RSOCxOI70qUWYaIa6q4dxpDnu8RTZm4eJb5qVEHGXFNCwUS98OqOBFKlPeeeZ5MG58tcl872u0uqPdUdEvJcYEDPYDYDQBdHfd22mtWe+0vIcPbfUcC/LYMb3WAZ92clylWMRwzhnKdY6pHPqgZrbuawNL2mqYJzpsOTjH2iOWWXgmcP3diIqPEtGbR7xG/gPmtipeNI1gwMmpmJLR3REnveCWpIfetpp0miQMjMADM/ZHrnPRcla7Y+q7E8+A2A5BavFVIhzHTMgg+IM+WvwVu03Iyo1uE4XYRnsQANRz0STF6rAITCrVrsb6Rwug5SCNCqxC0wbCROhCK9HLUxzF6Te9wUq8u9h5+20a/vD7Xz6rjry4fr0ZJbjb71PPLq3UekdVprHHW+5Gu71Puu/h/Rc9brG9p77SDz5+e67skKOrRa4QQCOREhTEx509pCYF19r4faTLHYehGIeW6qf8sE/3g8mn81BzZV+7roq1swMLfecMvIbrpbDcFFmZGM/fzHkNFrNYBohild12U6I7oz3J9orvOAL2Ae6zO3/AGlOT9rPE0eTZ8nLkHKu21PpVGvYYcIII2LXCPmri/T3JpSPEgjYrNuC9W2mi2oIB9l7R9l41HhuOhC01h1cbcFh+r259MiQab+zPNuJhHwBHkV2IVO02Oa1KqNWY2u6tc0/IgequhIgTmhIE9VQhCEaNeFQtFg7pbTd2eL23tE1T+I79TK0VQvehUewhlZ1L3nUqYfVjkyZAPWD5KVmx5F9Jd52ezg2KytBe6PrNWcTwMiKQOxORcBGw3K5C6riJ79UEN2afad48vmvS7PwJiqF1OiaQk/tLQ8vtDydXuz9o6wIHzWbfNKgx2CkcQZOKo4+27eAMg0beeZyUtxn475rKY3CNM8gANOgHT9Vgtp4bdn9oEjzbn8ilvC+XOJFPIZgO3jmOUpbPRNWm17T+0pOMSdd8J8RCvMY6vprWuytqhzXDKAOoIzkeqy7TbHUW4A6XgYQ7k0bn723ktRlqaGlxMEhziD7WWuXTJck5xJJOpJJ8TmtI37LTp2im3G442ggw7veJ57KvVuFrgTSq4vGCJ5Ym6eiymVnAEAwDrGpHJSWS1OpuxNPiNiORCJS/wDB7R/hH/Mz80LU/wCYP/H/ABfohB9CuCgr05CsprgtOjyH6SbqfTPb0iW+9hMSNp5rirPf9ZsSQ794flC98vm7W1mOY4TIXiPEPCz7PUIzwk908uizdZsOpcSe9T/yvn4EKZvENPdj/Rv+pYAsJG6U2Zw6/NNR0B4ipe4/0b/qTDxGz/Df54fzXOkKSzVQ1wJaHDcHT/dE1tniCchScfA5/AIFrqPImkWjmT6CI6BaFiqU3tlkRuAIjoQle2XdB8z+nzVVd4F4nNC0vY8ns3Ehw6TGIdWkz4Er2hjgQCDIOYI0I5hfNNjH/VfjqH4OXrXAfEwx/U6pg4cVnJ+0M8VPxESOhI2Wa1zXcuqxq1wHvZEfAz6hPY4ESDI5jRLKY6i0mYz5gkO9RmpHRICngquWuGclw3BjF5RE+Hx5zMKpDkIlI5S1dEpr3ACSYAzJOixb34ns9CW4sbxlgp5wfvO0b4a9Fw1+cSVq843BlMZ4GmG5bud9rzy6BZvSY2uKOKQ4GlZ3d3R9QbjdrOn3vTmvMOILw/u2n9/w938069L9EFtIydMWw8OZXOkpIz11/AVqXBawxzmuMBwmerf0n0WWhdHJParU5zieYw/h/r5qBISlQCEqUhA1CXEOY9UIPpux2gVGhwOoU68x+jPifEOxqOzGQncL04FadNVrY3uErk3dnag6m8d4SF2VUSCPFeUXxaH2e1FzT+qIxL/uKpZ3aEt2MaLEIXqlW9qNej3wJjfwXnd62TA4wMtlmxGY9oOoVO1sw6K48qva82qIZd1se14wamBGzuh/NdRXqYWfezjq6CcvisDh2yiXVXZBsgE89z5D5qne94Gq/L2R7I/n4qo3LvsAZUnESQDrEZxn806+ajmGnUYS17HAsc3UHUGdiC0Ka56uNjXdGjzAz+JKi4ldFNvVw+RT0r2XgniNtuszamQqNhlZo2eBqPuu1HpsuhXzzwNxA6xWpr8zTfFOq0btccnRzacx5jde5niCyBocbRTg6APl3+Qd7yhZvh05utNIXACSYA1JyAC469OOmNyoUy779TJg64B3iPGFy143tXr/ANrULhqG6MHg0ZeeqzemsdzenGFnpZU/2rvuGKfm/fyBXI3rxJaK2Tn4G+5T7o8zq7zMdFzttvBlMS53gB7R8AudvC+H1Mh3W8hqfEqSWpepGxeF8spyG953IaDxO3gudtluqVfadl7oyb6KshbnMjnerQiEIWmQgoQgRoSoQgE2o4DVJUqxpqqznSgl+sdPihQIQa932t1Go17TmD69F71whfjbTRaZzjNfPi2+GL/qWSoCD3dx/MJFj6IIXnPGd1TVDtt10N08X2eqycYnfNYF83o2q/JwgdVppmNpQIVW2WcOEFX8YUb4URxVts5a7oq2CV0l8WWWyFzR1WRFeleGCmzJg15uOsnpOcLKK0rayQs0ojf4bqS0t3DgciRk4Rt1TuIHOxNbPdiROeeYOevJZly1cNUD3gR56t+IC3L+YHU2vHP4OH+yo59p30XcWO0YmNdzaD6iVwy6W5a00YzkYm6Hnl8D8Fnpea069qDeZPJok/p5rBt19VSS1owbZ5v/ACCit1pc2scLyGgtyDu7ECRGnNUrSCHunXEZ9VJyt7qNziTJJJ5kyfVIhC2wEIQgEITSUDpQAgIQChq1dh6pK9TYeagQLKRKAp6dHmgggoV1CCd1ldyQKJ5LVLgkxBZ1Wa0PGkjwUtOtVG5Vx0JuIJoRlure8pRbq3vKIQpYTVO+tPIglUnjNXA1Q1GIK1ZshYzgt1wWLaWw4qhjHQQRsQR5LsKgFSi4DOQS3/2b8wuNXUcP18TANxl6afAj0VRLdl10S0P9uc89PRalps003NGUggRtksO6rSadR1I6Yjh8Z08/61W9RDzm4jo0DIeZzJ9FSOJcIyO0gjkRspazsQDt/Zd4jQ+Yj0Kv8Q2XDUxDR+o6jX+Sz7NmcPvCB+8M2n5j8SiIwhEIQCEJCUASiEAIhAoTar4Ccqtd8nwQMKGtlIrNBmSB1OnCeiUSgEIlCDWKRqELCpXaKFCEU9ShCFfSHtUdVCFIt+lcrHt3tIQrD0gctvhnV3iPk5KhaSo7b/3B/fZ/8rr6SEJCOe4o9tng75hY9k9pviPmkQlEts/tH/vO+ZUKEIz7CQaIQilCChCAVIoQgRXWpUIEKEIVaCEIQf/Z
          " 
          alt=""
            className='w-25 h-25  rounded-full border-6 border-black ml-5 -mt-13'
          />
          <div className="messagebox flex -ml-5 mt-4">
            <div className="max-w-3 max-h-3 min-h-3 min-w-3 rounded-full bg-neutral-900 -mt-2"></div>
          <div className="Status_message text-xs px-3 max-w-[220px] rounded-xl py-2 bg-neutral-900  flex items-center justify-center text-neutral-400">
            Hellos this is the status for the life  
          </div>  

          </div>
        </div>
        <div className="username-area w-full flex flex-col px-5 ">
          <div className="DisplayName text-lg  font-semibold ">
              !Yoru.Ayan.lEgend
            </div>
          <div className=" w-full flex items-center text-neutral-400 gap-1">
            <div className="Username text-sm  max-w-[150px]  ">
              @ayan124
            </div>  
            <div className='bg-neutral-400 min-h-1 min-w-1  rounded-full '></div>
            <div className="pronincation">
              Cat
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 mt-10">

        <div className="EditProfile flex items-center justify-center gap-2 w-full p-2 rounded-lg bg-white text-black" >
          <MdModeEditOutline /> Edit Profile
        </div>
        </div>
        <div className="p-4">
          <div className="about bg-neutral-900 p-4 rounded-2xl">
            <div className="About me text-neutral-500 ">About me</div>
            <div className="userbased-test-area text-sm text-neutral-300">
              LIfe is good is it import PropTypes <br /> from 'prop-types'
              what you think 


              here are some thing
            </div>
          </div>
        </div>
    </div>
  )
}

export default page