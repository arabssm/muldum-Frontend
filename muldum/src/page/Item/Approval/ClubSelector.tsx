import * as _ from './style';
import { ClubSelectorProps } from './type';

export default function ClubSelector({ clubs, selectedClub, setSelectedClub }: ClubSelectorProps) {
    const handleSelect = (club: string) => {
        setSelectedClub(club === selectedClub ? null : club);
    };

    return (
        <_.ClubArea>
            {clubs.map((club, i) => (
                <_.ClubName
                    key={i}
                    onClick={() => handleSelect(club)}
                    selected={selectedClub === club}
                >
                    {club}
                </_.ClubName>
            ))}
        </_.ClubArea>
    );
}