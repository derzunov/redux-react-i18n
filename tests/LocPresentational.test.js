import React from 'react'
import { shallow } from 'enzyme'
import LocPresentational from '../src/LocPresentational'

describe('<LocPresentational/> ru-RU', () => {

    it('should render <LocPresentational/> component with correct ru-RU with 1st plural form', () => {
        let props = {
            currentLanguage: 'ru-RU',
            locKey: 'key_4',
            dictionary: {
                key_4: [ '$Count', ' ', [ 'тестик', 'тестика', 'тестиков' ] ]
            }
        }
        const wrapper = shallow( <LocPresentational number="1" { ...props }/> )
        expect( wrapper.find( 'span' ).text()).toEqual( '1 тестик' )
    })

    it('should render <LocPresentational/> component with correct ru-RU with 2nd plural form', () => {
        let props = {
            currentLanguage: 'ru-RU',
            locKey: 'key_4',
            dictionary: {
                key_4: [ '$Count', ' ', [ 'тестик', 'тестика', 'тестиков' ] ]
            }
        }
        const wrapper = shallow( <LocPresentational number="42" { ...props }/> )
        expect( wrapper.find( 'span' ).text()).toEqual( '42 тестика' )
    })

    it('should render <LocPresentational/> component with correct ru-RU with 3rd plural form', () => {
        let props = {
            currentLanguage: 'ru-RU',
            locKey: 'key_4',
            dictionary: {
                key_4: [ '$Count', ' ', [ 'тестик', 'тестика', 'тестиков' ] ]
            }
        }
        const wrapper = shallow( <LocPresentational number="777" { ...props }/> )
        expect( wrapper.find( 'span' ).text()).toEqual( '777 тестиков' )
    })
})
