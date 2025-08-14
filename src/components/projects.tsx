import { ProjectCard } from './project-card';
import { SectionWrapper } from './section-wrapper';
import { SectionHeader } from './section-header';
import type { GitHubRepo } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';

async function getGithubProjects(): Promise<GitHubRepo[] | null> {
    try {
        const res = await fetch('https://api.github.com/users/alyakbar/repos?sort=updated&per_page=5&direction=desc', {
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!res.ok) {
            console.error(`GitHub API error: ${res.status} ${res.statusText}`);
            return null;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch GitHub projects:', error);
        return null;
    }
}

export async function Projects() {
    const repos = await getGithubProjects();

    return (
        <SectionWrapper id="projects" style={{ perspective: '2000px' }}>
            <SectionHeader 
                title="Recent Projects"
                description="Here are some of the latest projects I've been working on. Fetched from my GitHub profile."
            />
            
            {repos ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {repos.map((repo, index) => (
                        <ProjectCard key={repo.id} repo={repo} index={index} />
                    ))}
                </div>
            ) : (
                <Alert variant="destructive" className="max-w-2xl mx-auto">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Error Fetching Projects</AlertTitle>
                    <AlertDescription>
                        Could not fetch project data from GitHub. Please check back later.
                    </AlertDescription>
                </Alert>
            )}
        </SectionWrapper>
    );
}
