<?php


$COMMON_COLLEGE_FIELDS = [
    'name',
    'city',
    'state',
    'website',
];

$COMMON_VOCATIONAL_COLLEGE_FIELDS = [
    'name',
    'city',
    'state',
    'website',
    'note',
];

$COMMON_COLLEGE_DESIGN_FIELDS = [
    'name',
    'code',
    'city',
    'state',
    'website',
    'contact',
    'address',
];

return [

    // Engineering
    'exams-eng-national' => [
        'tag',
        'level',
        'name',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'source',
    ],

    'exams-eng-state' => [
        'tag',
        'level',
        'name',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'source',
    ],

    'exams-eng-university' => [
        'tag',
        'name',
        'calendar',
    ],

    'exams-eng-mca' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'source',
        'tag',
    ],

    'exams-eng-arch' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'source',
        'tag',
    ],

    // Medical
    'exams-med-national' => [
        'exam',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'source',
        'statusNote',
    ],

    'exams-med-state' => [
        'title',
        'note',
        'linkLabel',
        'href',
    ],

    'exams-med-nursing' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'sources',
        'tag',
        'statusNote',
    ],

    'exams-med-pg' => [
        'exam',
        'fullForm',
        'purpose',
        'apply',
        'activity',
        'sources',
        'tag',
    ],

    'exams-med-pharmacy' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'sources',
        'tag',
        'wbFocus',
    ],

    // Hotel
    'exams-hotel-national' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'source',
    ],

    'exams-hotel-state' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    'exams-hotel-university' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    'exams-hotel-run' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    // Law
    'exams-law-law' => [
        'exam',
        'fullForm',
        'purpose',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    'exams-law-management' => [
        'exam',
        'fullForm',
        'purpose',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    'exams-law-finance' => [
        'exam',
        'short',
        'purpose',
        'who',
        'apply',
        'sources',
        'tag',
        'note',
    ],

    // Design
    'exams-design-fashion' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'source',
        'tag',
    ],

    'exams-design-masscomm' => [
        'exam',
        'fullForm',
        'purpose',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    'exams-design-humanities' => [
        'exam',
        'fullForm',
        'purpose',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    'exams-design-math' => [
        'route',
        'nature',
        'purpose',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    // Agriculture
    'exams-agri-agriculture' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    'exams-agri-vet' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    'exams-agri-defence' => [
        'group',
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],

    'exams-agri-school' => [
        'exam',
        'fullForm',
        'purpose',
        'eligibility',
        'apply',
        'activity',
        'sources',
        'tag',
        'note',
    ],


     "colleges-iits" => [
        "name",
        "code",
        "state",
        "website",
    ],

    'colleges-nits' => $COMMON_COLLEGE_FIELDS,
    'colleges-iims' => $COMMON_COLLEGE_FIELDS,
    'colleges-aiims' => $COMMON_COLLEGE_FIELDS,
    'colleges-design' => $COMMON_COLLEGE_DESIGN_FIELDS,
    'colleges-nlu' => $COMMON_COLLEGE_FIELDS,

    'colleges-central' => $COMMON_COLLEGE_FIELDS,
    'colleges-state' => $COMMON_COLLEGE_FIELDS,
    'colleges-open' => $COMMON_COLLEGE_FIELDS,

    'colleges-engineering' => $COMMON_COLLEGE_FIELDS,
    'colleges-medical' => $COMMON_COLLEGE_FIELDS,
    'colleges-nursing' => $COMMON_COLLEGE_FIELDS,
    'colleges-pharmacy' => $COMMON_COLLEGE_FIELDS,
    'colleges-management' => $COMMON_COLLEGE_FIELDS,
    'colleges-law' => $COMMON_COLLEGE_FIELDS,
    'colleges-agriculture' => $COMMON_COLLEGE_FIELDS,
    'colleges-teacher-training' => $COMMON_COLLEGE_FIELDS,

    'colleges-polytechnic' => $COMMON_COLLEGE_FIELDS,

    'colleges-msme' => $COMMON_VOCATIONAL_COLLEGE_FIELDS,
    'colleges-skill' => $COMMON_VOCATIONAL_COLLEGE_FIELDS,


];