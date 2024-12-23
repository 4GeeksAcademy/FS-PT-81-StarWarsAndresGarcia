import { useParams } from "react-router";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const SingularPerson = () => {
    const params = useParams()
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPeople(params.id)
    }, [params.uid])
    return (
        <div className="container bg-dark">
            <div>
                <h1 className="titulo text-light">{store.singular?.name}</h1>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} alt="..." />
            </div>
            <div className="d-flex justify-content-end fit-contain">
                <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi.
                    Aenean magna nisl, aliquet vel, mattis eget, suscipit non, urna. Phasellus ultricies, justo eu tristique ornare, orci metus vulputate libero, eget tincidunt turpis eros eu nunc. Nam nec turpis non arcu vulputate luctus. Praesent varius, nulla non ornare gravida, elit mi vestibulum purus, a fermentum eros nulla eget est. Integer venenatis felis sed orci auctor, ac dictum nisi sollicitudin. Suspendisse sed nulla ac metus facilisis feugiat. Donec ut risus id justo dignissim aliquam a non lacus. Sed tincidunt, lorem in tincidunt consectetur, sapien augue vehicula augue, id vehicula metus lectus vitae augue.</p>
            </div>
        </div>
    );
}
