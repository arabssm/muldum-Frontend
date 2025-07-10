import * as _ from 'src/admin/page/Item/Approval/style';
import { ClubSelectorProps } from 'src/admin/page/Item/Approval/type';

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