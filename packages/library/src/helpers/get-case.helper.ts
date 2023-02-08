export type CaseType = 'camel' | 'kebab' | 'sentence' | 'pascal';

export const getSentenceCase = (array: string[]): string => {
    for (let i = 0; i < array.length; i += 1) {
        const word = array[i].toLowerCase();
        array[i] = word;
    }

    const string = array.join(' ');

    return string;
};

export const getCamelCase = (array: string[]): string => {
    const firstWord = array[0].toLowerCase();
    array[0] = firstWord;

    for (let i = 1; i < array.length; i += 1) {
        const word = array[i].toLowerCase();
        if (word.length > 0) {
            const splitWord = word.split('');
            splitWord[0] = splitWord[0].toUpperCase();
            const newWord = splitWord.join('');
            array[i] = newWord;
        } else {
            array[i] = word;
        }
    }

    const string: string = array.join('');

    return string;
};

export const getKebabCase = (array: string[]): string => {
    for (let i = 0; i < array.length; i += 1) {
        const word: string = array[i];

        const test = /[0-9]/g;
        if (array[i] && test.test(array[i])) {
            array[i] = word;
        } else if (array[i]) {
            array[i] = word.trim().toLowerCase();
        }
    }

    const string: string = array.join('-');

    return string;
};

export const getCase = (item: string, type: CaseType): string => {
    const kebabCaseTest = /-+/;
    const camelCaseTest = /^[a-z][A-Za-z]*$/;
    const pascalCaseTest = /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/;
    const sentenceCaseTest = /\s/;
    const containsNumbers = /\d/g;

    let array: string[] = [];
    if (item && containsNumbers.test(item.trim())) {
        array = item.trim().split(/(\d+)/);
        let tempArray: string[] = [];
        array.forEach((string, index, object) => {
            if (string.length === 0) {
                object.splice(index, 1);
            } else if (!parseInt(string)) {
                if (kebabCaseTest.test(string.trim())) {
                    string = string.slice(0, string.length - 1);
                }
                const formattedString = getCase(string.trim(), type);
                tempArray.push(formattedString);
            } else if (parseInt(string)) {
                tempArray.push(string);
            }
        });

        switch (type) {
            case 'camel': {
                return tempArray.join('');
            }
            case 'kebab': {
                return tempArray.join('-');
            }
            case 'sentence': {
                return tempArray.join(' ');
            }
        }
    } else if (item && sentenceCaseTest.test(item.trim())) {
        array = item.split(' ');
    } else if (item && kebabCaseTest.test(item.trim())) {
        array = item.split('-');
    } else if (item && pascalCaseTest.test(item.trim())) {
        array = item.split(/(?=[A-Z])/);
    } else if (item && camelCaseTest.test(item.trim())) {
        array = item.split(/(?=[A-Z])/);
    } else {
        array.push(item);
    }

    let string = '';
    switch (type) {
        case 'camel':
            {
                string = getCamelCase(array);
            }
            break;
        case 'kebab':
            {
                string = getKebabCase(array);
            }
            break;
        case 'sentence': {
            string = getSentenceCase(array);
        }
    }

    return string;
};
