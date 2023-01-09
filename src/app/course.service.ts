export class CoursesService {

    courses: { title: string, students: number, rating: number, price: number, releaseDate: Date }[] = [
        {
            title: "The Complete Angular Guide.",
            rating: 4.9754,
            students: 493030,
            price: 190.95,
            releaseDate: new Date(2022, 12, 14)
        },
        {
            title: "AWS Cloud Practitioner Preparation Exam.",
            rating: 3.24,
            students: 13904,
            price: 30.95,
            releaseDate: new Date(2018, 5, 5)
        },
    ]

    getCourses() {
        return this.courses;
    }

    getCoursesCount() {
        return this.courses.length;
    }
}