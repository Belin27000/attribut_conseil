import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "@/Components/KeyNumbers/keyNumber.scss";

const KeyNumber = () => {
  const [countYear, setCountYear] = useState(1);
  const [countPeople, setCountPeople] = useState(2500);
  const [countExpert, setCountExpert] = useState(1);
  const startYear = 2007;
  const yearNumber = Math.max(new Date().getFullYear() - startYear, 1);
  const referencePeopleCount = 4800;
  const referencePeopleDate = new Date("2026-01-01T00:00:00");
  const yearlyPeopleIncrease = 135;
  const weeksElapsed = Math.max(
    Math.floor(
      (Date.now() - referencePeopleDate.getTime()) / (7 * 24 * 60 * 60 * 1000),
    ),
    0,
  );
  const peopleHelped =
    referencePeopleCount + Math.floor((weeksElapsed * yearlyPeopleIncrease) / 52);
  const teamNumber = 6;
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    let intervalYear;

    if (inView) {
      intervalYear = setInterval(() => {
        if (countYear < yearNumber) {
          setCountYear((prevCount) => prevCount + 1);
        } else {
          clearInterval(intervalYear); // Arrête l'incrémentation lorsque le compteur atteint 15
        }
      }, 400);
    }

    return () => {
      clearInterval(intervalYear); // Assurez-vous d'arrêter l'intervalle lors du démontage du composant
    };
  }, [inView, countYear, yearNumber]);

  useEffect(() => {
    let intervalPeople;

    if (inView) {
      intervalPeople = setInterval(() => {
        if (countPeople < peopleHelped) {
          setCountPeople((prevCount) => prevCount + 1);
        } else {
          clearInterval(intervalPeople); // Arrête l'incrémentation lorsque le compteur atteint 4800
        }
      }, 4);
    }

    return () => {
      clearInterval(intervalPeople);
    };
  }, [inView, countPeople, peopleHelped]);

  useEffect(() => {
    let intervalExpert;

    if (inView && countExpert < teamNumber) {
      intervalExpert = setInterval(() => {
        setCountExpert((prevCount) => prevCount + 1);
      }, 1200);
    }

    return () => {
      clearInterval(intervalExpert);
    };
  }, [inView, countExpert]);

  return (
    <ul className="KeyNumber" ref={ref}>
      {inView && countYear <= yearNumber && (
        <li>
          <span className="AcNumber">+{countYear}</span>
          <span className="AcText">années d'expérience</span>
        </li>
      )}
      {inView && countPeople <= peopleHelped && (
        <li>
          <span className="AcNumber">+{countPeople}</span>
          <span className="AcText">personnes accompagnées</span>
        </li>
      )}
      {inView && countExpert <= teamNumber && (
        <li>
          <span className="AcNumber">{countExpert}</span>
          <span className="AcText">
            formateurs, consultants experts, coachs
          </span>
        </li>
      )}
    </ul>
  );
};

export default KeyNumber;
