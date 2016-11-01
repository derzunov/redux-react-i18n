import translate from 'translatr';

const Loc = ({ currentLanguage, locKey, number, dictionary }) => {
    return <span>
        { translate( dictionary, currentLanguage, locKey, number ) }
    </span>;
};

export default Loc;