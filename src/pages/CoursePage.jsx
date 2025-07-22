"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCourseStore from "../store/useCourseStore";
import {
  Loader,
  PlayCircle,
  ChevronDown,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Clock,
} from "lucide-react";
import Preview from "../components/Preview";

const CoursePage = () => {
  const { courseId } = useParams();
  const {
    isGettingFullCourse,
    getCourseById,
    fullCourse,
    lecture,
    isGettingLecture,
    getLectureById,
  } = useCourseStore();

  const [currentLectureIndex, setCurrentLectureIndex] = useState(0);
  const [selectedLevelDescription, setSelectedLevelDescription] = useState("");
  const [openLevels, setOpenLevels] = useState({});
  const [showingLevelDescription, setShowingLevelDescription] = useState(false);

  useEffect(() => {
    getCourseById(courseId);
  }, [courseId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const lectures = fullCourse?.levels?.flatMap((level) => level.lectures) || [];
  const currentLecture = lectures[currentLectureIndex];

  // Initialize open levels and load default Level 1
  useEffect(() => {
    if (fullCourse?.levels?.length > 0) {
      // Set first level as open by default
      const firstLevelId = fullCourse.levels[0]._id;
      setOpenLevels({ [firstLevelId]: true });

      const level = fullCourse.levels[0];
      const firstLecture = level.lectures?.[0];
      setSelectedLevelDescription(level.description || "");
      setShowingLevelDescription(true);

      if (firstLecture) {
        const flatIndex = lectures.findIndex((l) => l._id === firstLecture._id);
        setCurrentLectureIndex(flatIndex);
      }
    }
  }, [fullCourse]);

  const toggleLevel = (levelId) => {
    setOpenLevels((prev) => ({
      ...prev,
      [levelId]: !prev[levelId],
    }));
  };

  const handleLevelClick = (level) => {
    setSelectedLevelDescription(level.description || "");
    setShowingLevelDescription(true);
  };

  const handleLectureClick = (lec, flatIndex) => {
    setCurrentLectureIndex(flatIndex);
    getLectureById(lec._id);
    setShowingLevelDescription(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentLectureIndex < lectures.length - 1) {
      const nextIndex = currentLectureIndex + 1;
      setCurrentLectureIndex(nextIndex);
      getLectureById(lectures[nextIndex]._id);
      setShowingLevelDescription(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentLectureIndex > 0) {
      const prevIndex = currentLectureIndex - 1;
      setCurrentLectureIndex(prevIndex);
      getLectureById(lectures[prevIndex]._id);
      setShowingLevelDescription(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (isGettingFullCourse) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black to-gray-900">
        <div className="text-center">
          <Loader className="size-12 animate-spin text-blue-400 mx-auto mb-4" />
          <p className="text-gray-200">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!fullCourse) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-red-400 bg-gradient-to-br from-black to-gray-900">
        <div className="text-center">
          <BookOpen className="size-16 mx-auto mb-4 text-red-400" />
          <p className="text-gray-200">Course not found!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-100 mt-10">
      <div className="flex flex-col lg:flex-row max-w-8xl mx-auto min-h-screen">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 bg-black/80 backdrop-blur-sm border-r border-gray-800/50 overflow-y-auto max-h-screen sticky top-0">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="size-6 text-blue-400" />
              <h2 className="text-xl font-bold text-gray-100">
                Course Content
              </h2>
            </div>

            <div className="space-y-3">
              {fullCourse.levels?.map((level) => (
                <div
                  key={level._id}
                  className="bg-gray-900/50 rounded-xl border border-gray-700/50 overflow-hidden"
                >
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleLevel(level._id)}
                      className="p-3 hover:bg-gray-800/50 transition-colors"
                    >
                      {openLevels[level._id] ? (
                        <ChevronDown className="size-5 text-blue-400" />
                      ) : (
                        <ChevronRight className="size-5 text-blue-400" />
                      )}
                    </button>
                    <button
                      onClick={() => handleLevelClick(level)}
                      className="flex-1 text-left p-3 hover:bg-gray-800/30 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-100 text-base">
                        {level.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {level.lectures?.length || 0} lectures
                      </p>
                    </button>
                  </div>

                  {openLevels[level._id] && (
                    <div className="px-3 pb-3">
                      <div className="space-y-2 ml-8">
                        {level.lectures?.map((lec) => {
                          const flatIndex = lectures.findIndex(
                            (l) => l._id === lec._id
                          );
                          const isActive =
                            lectures[currentLectureIndex]?._id === lec._id &&
                            !showingLevelDescription;

                          return (
                            <button
                              key={lec._id}
                              onClick={() => handleLectureClick(lec, flatIndex)}
                              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                                isActive
                                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                  : "hover:bg-gray-600/50 text-gray-300 hover:text-gray-100"
                              }`}
                            >
                              <PlayCircle
                                className={`size-4 flex-shrink-0 ${
                                  isActive ? "text-white" : "text-blue-400"
                                }`}
                              />
                              <span className="text-sm font-medium truncate">
                                {lec.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-8">
          <div className="max-w-4xl">
            {/* Course Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-100 mb-3">
                {fullCourse.courseTitle}
              </h1>
              <p className="text-base text-gray-300 leading-relaxed">
                {fullCourse.subTitle}
              </p>
            </div>

            {/* Content Area */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 lg:p-8">
              {showingLevelDescription ? (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="size-6 text-blue-400" />
                    <h2 className="text-xl font-bold text-gray-100">
                      Level Overview
                    </h2>
                  </div>
                  <div className="prose prose-invert max-w-none text-gray-200">
                    <Preview
                      content={
                        selectedLevelDescription || "No description available"
                      }
                    />
                  </div>
                </div>
              ) : currentLecture ? (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <PlayCircle className="size-6 text-blue-400" />
                    <h2 className="text-xl font-bold text-gray-100">
                      {currentLecture.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>
                        Lecture {currentLectureIndex + 1} of {lectures.length}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    {isGettingLecture ? (
                      <div className="flex items-center gap-3 p-6 bg-gray-900/50 rounded-xl">
                        <Loader
                          className="animate-spin text-blue-400"
                          size={20}
                        />
                        <span className="text-gray-200">
                          Loading lecture content...
                        </span>
                      </div>
                    ) : (
                      <div className="prose prose-invert max-w-none text-gray-200">
                        <Preview
                          content={
                            lecture?.description || "No description available"
                          }
                        />
                      </div>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={handlePrevious}
                      disabled={currentLectureIndex === 0}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                        currentLectureIndex === 0
                          ? "bg-gray-900/50 text-gray-500 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
                      }`}
                    >
                      Previous Lecture
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentLectureIndex === lectures.length - 1}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                        currentLectureIndex === lectures.length - 1
                          ? "bg-gray-700/50 text-gray-500 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
                      }`}
                    >
                      Next Lecture
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="size-16 mx-auto mb-4 text-gray-500" />
                  <p className="text-gray-400 text-base">
                    Select a lecture to start learning
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
