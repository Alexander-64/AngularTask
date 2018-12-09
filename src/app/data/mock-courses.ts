import Course from '../shared/entities/Course';

export const Courses: Course[] = [
    {
        id: 1,
        title: 'The Hateful Eight',
        creationDate: '2015-11-26T19:50:20.439856+00:00',
        duration: 130,
        description: 'The Hateful Eight  eight strangers who' +
            'seek refuge from a blizzard in a stagecoach stopover' +
            'some time after the American Civil War',
    },
    {
        id: 2,
        title: 'Sin City',
        creationDate: '2005-10-26T19:50:20.439856+00:00',
        duration: 111,
        description: 'Sin City (also known as Frank Millers Sin City)[3] is a 2005 American ' +
            'neo-noir crime anthology film written, produced, and directed by Robert ' +
            'Rodriguez and Frank Miller. It is based on Millers graphic novel of the same name.[4]',
    },
    {
        id: 3,
        title: 'Reservoir Dogs',
        creationDate: '1992-11-26T19:50:20.439856+00:00',
        duration: 99,
        description: 'Reservoir Dogs is a 1992 American heist film written and directed by Quentin Tarantino in his feature-length debut.' +
            'he film depicts the events before and after the heist. Kirk Baltz, Randy Brooks and Steven Wright also' +
            'play supporting roles.' +
            'some time after the American Civil War',
    },
];

export const AddedCourse: Course = {
    id: 4,
    title: 'Pulp Fiction',
    creationDate: '1994-09-01T19:50:20.439856+00:00',
    duration: 154,
    description: 'TPulp Fiction is a 1994 American crime film written and directed by Quentin' +
        ' Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta' +
        ', Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several' +
        ' stories of criminal Los Angeles. The films title refers to the pulp magazines and hardboiled' +
        'crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
};
